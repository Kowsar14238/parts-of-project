// JavaScript for tilt effect

// Select all elements with the class 'rgb-card'
const cards = document.querySelectorAll('.rgb-card');

// Attach event listeners for mousemove and mouseleave to each card
cards.forEach(card => {
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', resetTilt);
});

// Function to handle mouse movement
function handleMouseMove(event) {
    // Extract necessary information from the event
    const card = event.currentTarget;
    const { offsetX, offsetY, target } = event;
    const { offsetWidth, offsetHeight } = target;

    // Calculate the tilt angles based on mouse position
    const xPos = (offsetX / offsetWidth - 0.5) * 10;
    const yPos = (offsetY / offsetHeight - 0.5) * -10;

    // Apply the tilt transform to the card
    card.style.transform = `perspective(1000px) rotateX(${yPos}deg) rotateY(${xPos}deg)`;
}

// Function to reset tilt on mouse leave
function resetTilt(event) {
    // Reset the tilt transform to its initial state
    event.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
}
