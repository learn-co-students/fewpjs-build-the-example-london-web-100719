// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorMessage = document.getElementById("modal");
errorMessage.classList.add("hidden");

const likeButtons = document.querySelectorAll(".like");

likeButtons.forEach(function(likeButton){

  likeButton.addEventListener("click", function(){
    if(likeButton.firstElementChild.innerText === FULL_HEART) {
      likeButton.classList.remove("activated-heart");
      likeButton.firstElementChild.innerText = EMPTY_HEART;

      mimicServerCall().then(function(result){
        console.log(result)
      })
      
    } else {
      likeButton.firstElementChild.innerText = FULL_HEART;
      likeButton.classList.add("activated-heart");

      mimicServerCall().then(function(result){
        console.log(result)
      }).catch((error) => {
        errorMessage.classList.remove("hidden");
        console.log(error)
        errorMessage.innerText = error;
        setTimeout(function() {
        errorMessage.classList.add("hidden");}, 5000);

    })
    }
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
