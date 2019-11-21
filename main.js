// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.getElementById("modal")
errorModal.className = "hidden"

addLikeListener()

function addLikeListener(){
const like = document.querySelectorAll(".like")
like.forEach (like => like.addEventListener('click', transformHeart))
}

function transformHeartFn(event){
  let heart = event.target
  let isHeart = heart.nodeName === "SPAN"
  if (isHeart){
    if (heart.textContent === EMPTY_HEART){
    heart.textContent = FULL_HEART
    heart.className = "activated-heart"
  } else if (heart.textContent === FULL_HEART) {
    heart.textContent = EMPTY_HEART
    heart.className = ""
  }
}
}

function transformHeart(event){
  mimicServerCall()
  .then(() => transformHeartFn(event))
  .catch((val) => {      
    console.log(val)

    errorModal.className = ""
    setTimeout(() => errorModal.className = "hidden", 5000)
})
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
