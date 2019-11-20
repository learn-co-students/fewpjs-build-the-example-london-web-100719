// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorBar = document.querySelector('#modal')
// Your JavaScript code goes here!

document.addEventListener('click', (event) => {

    const target = event.target

    let likeButton;

    if (target.tagName == "LI") {

        likeButton = target.childNodes[1];

    } else if (target.tagName == "SPAN") {

        likeButton = target;

    }

    if (target.tagName == "LI" || target.parentNode.tagName == "LI") {

        mimicServerCall()

        .then(res => {

            console.log(res)
            errorBar.classList.add("hidden");
            
            if (likeButton.textContent == FULL_HEART) {

                likeButton.textContent = EMPTY_HEART;
                likeButton.classList.remove("activated-heart")

            } else {

                likeButton.textContent = FULL_HEART;
                likeButton.classList.add("activated-heart")

            }

        })

        .catch( () => {

            errorBar.classList.remove("hidden");

        });



    };

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
    }, 100);
  });
};
