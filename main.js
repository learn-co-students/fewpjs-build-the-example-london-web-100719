let modal = document.querySelector("#modal");
modal.classList.add("hidden");

document.addEventListener("DOMContentLoaded", ()=>{

  const EMPTY_HEART = '♡'
  const FULL_HEART = '♥'



  const likeIconArray = document.querySelectorAll(".like-glyph");
  likeIconArray.forEach(addEventListenerToIcon);

  function addEventListenerToIcon(icon, index) {
    icon.addEventListener("click", handleLikeClick);
  }

  function handleLikeClick(event) {
    let icon = event.target
    mimicServerCall()
    .then(() => {
      icon.innerHTML = toggleHeartShape(icon.innerHTML)
      icon.classList.toggle("activated-heart");
    })
    .catch(() => {
      modal.classList.remove("hidden")
      setTimeout(() => {modal.classList.add("hidden")}, 5000);
    })
  }

  function toggleHeartShape(currentIconShape) {
    return currentIconShape == FULL_HEART ? EMPTY_HEART : FULL_HEART;
  }
});


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
