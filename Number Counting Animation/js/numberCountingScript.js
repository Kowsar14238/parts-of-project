//JavaScript code for the number counting animation

let valueDisplays = document.querySelectorAll(".container-value");// Get all elements with the class 'container-value'
let interval = 5000;// Set the interval for the counting animation (in milliseconds)

// Iterate over each element with the class 'container-value'
valueDisplays.forEach((valueDisplay) => {

    let startValue = 0;// Initialize variables for counting animation
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));    
    let duration = Math.floor(interval / endValue);// Calculate the duration for each step of the animation

    // Set up an interval to update the counter at regular intervals
    let counter = setInterval(function () {
        
        startValue += 1;// Increment the counter value        
        valueDisplay.textContent = startValue;// Update the displayed value

        // Check if the target value is reached, then stop the interval
        if (startValue === endValue) {
            clearInterval(counter);
        }
    }, duration);
});
