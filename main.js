// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const errModal = document.querySelector("#modal");
  errModal.className = "hidden";

  const likeButtons = document.querySelectorAll(".like-glyph");
  likeButtons.forEach(btn =>
    btn.addEventListener("click", function() {
      mimicServerCall("foo bar")
        .then(clickedLikeButton(btn))
        .catch(err => displayError(err));
    })
  );

  function clickedLikeButton(btn) {
    btn.classList.toggle("activated-heart");
    btn.className == "like-glyph activated-heart"
      ? (btn.innerText = FULL_HEART)
      : (btn.innerText = EMPTY_HEART);
  }
});

function displayError(err) {
  errModal.className = "";
  errModal.innerText = err;
  setTimeout(function() {
    errModal.className = "hidden";
  }, 3000);
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
