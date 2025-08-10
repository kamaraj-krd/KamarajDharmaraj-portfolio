function showSection(sectionId) {
    // Remove 'active' from all sections
    document.querySelectorAll("section").forEach(section => {
        section.classList.remove("active");
    });

    // Add 'active' to clicked section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add("active");
}
const titles = [
    "Full Stack Developer",
    "Java Full Stack",
    "Software Developer"
];

let currentIndex = 0;  // Which title
let charIndex = 0;     // Which letter

function typeEffect() {
    let title = titles[currentIndex];

    // Show substring up to current letter
    document.getElementById("role").textContent = title.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex < title.length) {
        // Keep typing the current title
        setTimeout(typeEffect, 150); // speed
    } else {
        // After finishing, wait, then move to next
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % titles.length; // loop
            charIndex = 0;
            document.getElementById("role").textContent = "";
            setTimeout(typeEffect, 200); // small pause before typing again
        }, 1000);
    }
}

// Start animation
typeEffect();
