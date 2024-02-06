// function answer(response) {
//   if (response === 'yes') {
//     const date = new Date();
//     const day = date.getDate();
//     if (day === 12) {
//       window.location.href = "rose.html";
//     } else if (day === 13) {
//       window.location.href = "chocolate.html";
//     }
//   } else if (response === 'no') {
//     const panda = document.getElementById('panda');
//     panda.src = "please_panda.png";
//   }
// }


// Define an array of GIF URLs
const gifs = [
  "https://media.tenor.com/kw2xrhnN1U8AAAAi/tkthao219-bubududu.gif",
  "https://media.tenor.com/ck7oRyY26uwAAAAi/bear-놀자곰.gif",
  "https://media.tenor.com/Idr_-NLOu8oAAAAi/milk-and-mocha.gif",
  "https://media.tenor.com/pj-WvOM7W2oAAAAi/mocha-and.gif",
  "https://media.tenor.com/cAO-Y2kE5CkAAAAi/tkthao219-bubududu.gif"
];

// Index to track the current GIF
let gifIndex = 0;

function answer(response) {
  console.log(response)
  if (response === 'yes') {
    const date = new Date();
    const day = date.getDate();
    console.log(day)
    if (day === 6) {
      window.location.href = "Hug.html";
    } else if (day === 13) {
      window.location.href = "chocolate.html";
    }
  } else if (response === 'no') {
    // Toggle between different GIFs when "No" is clicked
    gifIndex = (gifIndex + 1) % gifs.length;
    const bear = document.getElementById('bear');
    bear.src = gifs[gifIndex];


    // const button = document.createElement('button');
    // button.textContent = 'Yes';
    // button.classList.add('yes-button');
    // button.style.position = 'absolute';
    // button.style.left = Math.random() * window.innerWidth + 'px';
    // button.style.top = Math.random() * window.innerHeight + 'px';
    // button.addEventListener('click', function() {
    //     const date = new Date();
    // const day = date.getDate();
    // console.log(day)
    // if (day === 6) {
    //   window.location.href = "rose.html";
    // } else if (day === 13) {
    //   window.location.href = "chocolate.html";
    // }
    //   });
    // document.body.appendChild(button);

  }
}
