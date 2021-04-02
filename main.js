// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeGlyph  = document.querySelectorAll(".like-glyph")


for  (const glyph of likeGlyph) {
  glyph.addEventListener("click", clickLike);
}

function clickLike(e) {
  heart = e.target
  mimicServerCall("fakeURL")
  .then(function(resp) {
    if (EMPTY_HEART) {
      heart.innerText = FULL_HEART
      heart.style.color = "red"
    }
    else {
      heart.innerText = EMPTY_HEART
      heart.style.color = " "
    }
  } )
  .catch(function(error) {
    let modal = document.querySelector("#modal")
    
  })
}




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
