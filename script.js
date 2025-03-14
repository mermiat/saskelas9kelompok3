// let text = document.getElementById('text');

// function animateText() {
//     let value = window.scrollY;
//     let translateYValue = Math.min(-value * 0.3, -300); // Negative value moves down
//     let opacityValue = Math.max(1 - value * 0.001, 0); // Adjust multiplier as needed

//     text.style.transform = `translateY(${translateYValue}px)`;
//     text.style.opacity = opacityValue;

//     requestAnimationFrame(animateText);
// }

// window.addEventListener('load', () => {
//     if (text) { // Check if the element exists to avoid errors
//       animateText();
//     } else {
//       console.error("Element with ID 'text' not found.");
//     }
// });