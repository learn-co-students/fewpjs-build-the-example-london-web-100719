// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Variables set here

const errorBanner = document.querySelector('#modal') // Selects the error banner
let articleHearts = document.querySelectorAll(".like");
let heart = document.querySelector('.like-glyph')

// Functions 



// Rest of Code 


document.addEventListener('click', function() {
  function theheart(e) {
    let heart = e.target;
    mimicServerCall("aklsdjfasdhfjw")
        .then(res => {
          console.log(res)
          if (heart.innerHTML === EMPTY_HEART) {
            heart.innerHTML = FULL_HEART;
          }
          else if (heart.innerHTML === FULL_HEART) {
            heart.innerHTML = EMPTY_HEART;
          }
        })
        .catch(function(error) {
          errorBanner.className = "";
          setTimeout(function() {errorBanner.className = "hidden"}, 5000)
        })
  }
  
})

  



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
