// JavaScript for slider functionality
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    
    // Loop through all slides
    slides.forEach((slide, index) => {
        slide.style.display = "none"; // Hide all slides
    });

    // Increase slide index and loop back if necessary
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    // Display current slide
    slides[slideIndex - 1].style.display = "block";
    
    // Call the function every 3 seconds to switch slides
    setTimeout(showSlides, 3000);
}

// Initialize the slider
showSlides();

