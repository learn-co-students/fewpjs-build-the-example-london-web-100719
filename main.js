// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
let modal = document.getElementById("modal");
let hearts = document.getElementsByClassName("like-glyph");

for (const heart of hearts) {
  heart.addEventListener("click", () => {
    if (heart.innerText == FULL_HEART) {
      heart.classList.remove("activated-heart");
      heart.innerText = EMPTY_HEART;
    } else {
      serverRequest(heart);
    }
  });
}

function serverRequest(heart) {
  mimicServerCall()
    .then(() => {
      toggleHeart(heart);
    })
    .catch(error => handleError(error));
}

function toggleHeart(heart) {
  heart.classList.add("activated-heart");
  heart.innerText = FULL_HEART;
  // console.log("success route");
}

function hideModal() {
  modal.classList.add("hidden");
}

function handleError(error) {
  let modalMessage = document.getElementById("modal-message");
  // console.log("random failure route");
  modalMessage.innerText = error;
  modal.classList.remove("hidden");
  setTimeout(hideModal, 1000);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
