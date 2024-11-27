let projectsContainer = document.getElementsByClassName("projects-container");
let title = document.getElementsByClassName("title");

function test (name) {
    console.log(name);
}

function onHoverTitle () {
    // how to change title . next day task
    
}

const text = document.querySelector('.light-follow-text');
  let mouseX = 0;
  let mouseY = 0;

  // Update mouse position on mousemove
  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  function animateShadow() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calculate offset based on the mouse position relative to the center
    const xOffset = (centerX - mouseX) / 20;
    const yOffset = (centerY - mouseY) / 20;

    // Apply shadow with larger blur for a softer look
    text.style.textShadow = `
      ${xOffset}px ${yOffset}px 15px rgba(255, 255, 255, 0.6),
      ${xOffset * 1.5}px ${yOffset * 1.5}px 30px rgba(255, 255, 255, 0.4),
      ${xOffset * 2}px ${yOffset * 2}px 45px rgba(255, 255, 255, 0.2)
    `;

    // Request next animation frame
    requestAnimationFrame(animateShadow);
  }

  // Start animation
  animateShadow();

  // Select the arrow and the skills section
const arrow = document.getElementById('arrow');
const skillsSection = document.getElementById('skills');

// Intersection Observer for detecting the skills section
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation class when skills section is in view
        arrow.classList.add('animate');
      } else {
        // Remove animation class when scrolling away
        arrow.classList.remove('animate');
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the section is visible
  }
);

// Observe the skills section
observer.observe(skillsSection);

