const toggleButton = document.querySelector('#toggle-button');
const toggle = document.querySelector('#toggle');
const toggleBall = document.querySelector('.toggle-ball');
const toggleContainer = document.querySelector('.toggle-container');
const circleLabel = document.querySelector('#circle');
const squareLabel = document.querySelector('#square');

toggleButton.addEventListener('change', () => {

    if (toggle.checked) {
        toggleContainer.classList.remove('round');
        toggleContainer.classList.add('square');
        toggleBall.classList.remove('round', 'toggleOff');
        toggleBall.classList.add('square', 'toggleOn');
        squareLabel.classList.remove('inactive');
        squareLabel.classList.add('active');
        circleLabel.classList.remove('active');
        circleLabel.classList.add('inactive');
    } else {
        toggleContainer.classList.remove('square');
        toggleContainer.classList.add('round');
        toggleBall.classList.remove('square', 'toggleOn');
        toggleBall.classList.add('round', 'toggleOff');
        squareLabel.classList.remove('active');
        squareLabel.classList.add('inactive');
        circleLabel.classList.remove('inactive');
        circleLabel.classList.add('active');
    }

});