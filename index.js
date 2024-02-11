window.onload = function() {

  var previousResponse = localStorage.getItem('valentineResponse');
  console.log(previousResponse);
  if(previousResponse){
    function createRandomHeart() {
      const heart = document.createElement('div');
      heart.className = 'random-heart';
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.top = Math.random() * window.innerHeight + 'px';
      heart.innerHTML = '❤'; // Adding heart symbol
      document.body.appendChild(heart);
      
      // Remove the heart after a random duration
      setTimeout(() => {
        heart.remove();
      }, Math.random() * 2000); // Random duration between 1 to 6 seconds
    }

    // Create random hearts at intervals
    setInterval(createRandomHeart, 200); // Adjust interval as needed


    document.getElementById('options').style.display = 'none';
    document.getElementById('confirmationHead').textContent = 'You are my Valentines Love!!';
    // var message = = "Happy to have you as my Valentines.\nI Love You!\nGo Ahead and See Whats Today";
    // var paragraph = document.getElementById('confirmationMessage');
    // paragraph.innerHTML = message.replace(/\n/g, "<br>");
    var message = "Happy to have you as my Valentines.\nI Love You!\nGo Ahead and See Whats Today";
    var paragraph = document.getElementById('confirmationMessage');
    paragraph.innerHTML = message.replace(/\n/g, "<br>");

  } else{
    document.getElementById('confirmButton').style.display = 'none';
  }


};

const gifs = [
  "https://media.tenor.com/ck7oRyY26uwAAAAi/bear-놀자곰.gif",
  "https://media.tenor.com/kw2xrhnN1U8AAAAi/tkthao219-bubududu.gif",
  "https://media.tenor.com/Idr_-NLOu8oAAAAi/milk-and-mocha.gif",
  "https://media.tenor.com/pj-WvOM7W2oAAAAi/mocha-and.gif",
  "https://media.tenor.com/cAO-Y2kE5CkAAAAi/tkthao219-bubududu.gif"
];

let gifIndex = 0;

function answer(response) {
  console.log(response)
  if (response === 'yes') {
    const date = new Date();
    const day = date.getDate();
    console.log(day)
    if (day === 11) {
    window.location.href = "Hug/Hug.html";
    } else if (day === 13) {
      window.location.href = "Kiss/Kiss.html";
    }
    else if (day === 12) {
      window.location.href = "Valentines/Valentines.html";
    }
    localStorage.setItem('valentineResponse', true);
  } 
  else if (response === 'no') {
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



function showInfo() {
  document.getElementById('info-popup').style.display = 'block';
}

function hideInfo() {
  document.getElementById('info-popup').style.display = 'none';
}