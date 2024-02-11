window.onload = function() {

  // Initialize the first video
  const videoPlayer = document.getElementById('videoPlayer');
  videoPlayer.src = videoFiles[currentVideoIndex];

  // Function to handle keyboard events for changing video
  document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowLeft") {
      changeVideo(-1); // Move to previous video on left arrow key press
    } else if (event.key === "ArrowRight") {
      changeVideo(1); // Move to next video on right arrow key press
    }
  });
  function createRandomHeart() {
      const heart = document.createElement('div');
      heart.className = 'random-heart';
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.top = Math.random() * window.innerHeight + 'px';
      heart.innerHTML = '😘'; // Adding heart symbol
      document.body.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, Math.random() * 2000);
    }

    setInterval(createRandomHeart, 200);
}


const videoFiles = ["Kiss1.mp4", "Kiss2.mp4", "Kiss3.mp4"];
  let currentVideoIndex = 0;

  // Function to change video
  function changeVideo(direction) {
    currentVideoIndex += direction;
    if (currentVideoIndex < 0) {
      currentVideoIndex = videoFiles.length - 1;
    } else if (currentVideoIndex >= videoFiles.length) {
      currentVideoIndex = 0;
    }
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoFiles[currentVideoIndex];
    videoPlayer.play();
  }

  function next() {
    window.location.href = "FinalDay.html";
  }
