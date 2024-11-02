// Starry background effect
function createStars() {
    const stars = 100;
    const starContainer = document.body;

    for (let i = 0; i < stars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * window.innerHeight}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;
        starContainer.appendChild(star);
    }
}

// Show overlay for "Why?" explanation
function showOverlay() {
    document.getElementById("whyOverlay").style.display = "flex";
}

// Hide overlay
function hideOverlay() {
    document.getElementById("whyOverlay").style.display = "none";
}

// Typed effect for each quote
function typeQuote(element, text) {
    element.innerHTML = ""; // Clear element for typing
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 40);
        }
    }
    type();
}

// Initialize typed effect on page load
document.addEventListener("DOMContentLoaded", function() {
    createStars();

    const quotes = document.querySelectorAll(".quote-box");
    quotes.forEach(quote => {
        const text = quote.textContent;
        typeQuote(quote, text);
    });
});
