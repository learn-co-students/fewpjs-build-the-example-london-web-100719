// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
  
  window.addEventListener("DOMContentLoaded", () => {
    controller()
  })

  function controller() {
    addListeners()
  }

  function addListener(el) {
    el.addEventListener("click", likeFunction)
  }

  function addListeners() {
    hearts = document.querySelectorAll(".like-glyph")
    hearts.forEach(el => addListener(el))
  }

  function likeFunction() {
    let heart = event.target
    if (event.target.classList[1] === "activated-heart") {
      emptyHeart(event.target)
    } else {

    mimicServerCall()
    .then(fullHeart(event.target))
    .catch(error => {
      showError(error)
      setTimeout(() => {
        let modal = document.querySelector("#modal")
        modal.classList.toggle("hidden")
      }, 5000)
      emptyHeart(heart)})
    }
  }

  function fullHeart(el) {
    el.innerHTML = FULL_HEART
    el.classList.add("activated-heart")
  }

  function emptyHeart(el) {
    el.innerHTML = EMPTY_HEART
    el.classList.remove("activated-heart")
  }

  function showError(error) {
    let modal = document.querySelector("#modal")
    modal.classList.toggle("hidden")
    modal.children[0].innerHTML = error
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
