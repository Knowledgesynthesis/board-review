// Wait for everything to load before initializing
// Reveal.js initialization

document.addEventListener('DOMContentLoaded', function() {
  Reveal.initialize({
    controls: true,
    progress: true,
    center: false,
    hash: true,
    transition: 'slide',
    width: "100%",
    height: "100%",
    margin: 0,
    minScale: 1,
    maxScale: 1
  });
});

function markChoice(element) {
  // Get all answer choices in the same container
  const container = element.parentElement;
  const choices = container.querySelectorAll('.answer-choice');
  
  // Reset all choices
  choices.forEach(choice => {
    choice.classList.remove('correct', 'incorrect', 'pulse');
    choice.querySelector('.answer-marker').style.display = 'none';
  });
  
  // Mark only the clicked choice
  if (element.getAttribute('data-correct') === 'true') {
    element.classList.add('correct', 'pulse');
    element.querySelector('.answer-marker').style.display = 'inline';
  } else {
    element.classList.add('incorrect');
    element.querySelector('.answer-marker').style.display = 'inline';
  }
}

function toggleExplanation(button) {
  const explanation = button.nextElementSibling;
  if (explanation.style.display === 'block') {
    explanation.style.display = 'none';
    button.textContent = 'Show Explanation';
  } else {
    explanation.style.display = 'block';
    button.textContent = 'Hide Explanation';
  }
}
