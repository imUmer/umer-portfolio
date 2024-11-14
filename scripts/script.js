let projectsContainer = document.getElementsByClassName("projects-container");
let title = document.getElementsByClassName("title");

function test (name) {
    console.log(name);
}

function onHoverTitle () {
    // how to change title . next day task
    
}

const text = document.querySelector('.light-follow-text');

  // Event listener to track mouse movement
  document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    // Calculate shadow offset based on mouse position relative to window size
    const xOffset = (window.innerWidth / 2 - clientX) / 30;
    const yOffset = (window.innerHeight / 2 - clientY) / 30;

    // Set the text-shadow based on calculated offsets
    text.style.textShadow = `${xOffset}px ${yOffset}px 10px rgba(255, 255, 255, 0.7)`;
  });