// Array of photo objects
const photos = [
    { src: "photo1.jpg", caption: "My First long exposure shot" },
    { src: "photo2.jpg", caption: "somewhere near Tobermory ON" },
    { src: "photo3.jpg", caption: "Rare photo of me lol (near Tobermory)" }
    // Add more photos as needed
];

// Function to load photos dynamically
function loadPhotos() {
    const gallery = document.getElementById("photoGallery");

    photos.forEach(photo => {
        // Create elements
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photo");

        const img = document.createElement("img");
        img.src = photo.src;
        img.alt = photo.caption;

        const caption = document.createElement("p");
        caption.textContent = photo.caption;

        // Append elements to photoDiv and gallery
        photoDiv.appendChild(img);
        photoDiv.appendChild(caption);
        gallery.appendChild(photoDiv);
    });
}

// Call the function to load photos on page load
window.onload = loadPhotos;
