// Array of photo objects
const photos = [
    
    { src: "galleryImages/photo3.jpg", caption: "Rare photo of me lol (near Tobermory)" },
    { src: "galleryImages/photo4.jpg", caption: "cool sunset" },
    { src: "galleryImages/photo5.jpg", caption: "semi-failed baking attempt" },
    { src: "galleryImages/photo6.jpg", caption: "scary 👻"},
    { src: "galleryImages/photo7.jpg", caption: "failed photo but looks cool lol"},
    { src: "galleryImages/photo8.jpg", caption: "Tobermory at Night"},
    { src: "galleryImages/photo1.jpg", caption: "My First long exposure shot" },
    { src: "galleryImages/photo2.jpg", caption: "somewhere near Tobermory ON" },

   
    // Add more photos as needed
];

/*
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
*/

/*
const gallery = document.getElementById('photo-gallery');

photos.forEach(photo => {
    const photoDiv = document.createElement('div');
    photoDiv.classList.add('photo');

    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.caption;

    const caption = document.createElement('p');
    caption.textContent = photo.caption;

    photoDiv.appendChild(img);
    photoDiv.appendChild(caption);
    gallery.appendChild(photoDiv);
});

*/


const gallery = document.getElementById('photo-gallery');
const modal = document.getElementById('photo-modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const closeModal = document.getElementById('close-modal');

// Load photos dynamically into the gallery
photos.forEach(photo => {
    const photoDiv = document.createElement('div');
    photoDiv.classList.add('photo');

    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.caption;

    // Add click event to open the modal
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = photo.src;
        modalCaption.textContent = photo.caption;
    });

    photoDiv.appendChild(img);
    gallery.appendChild(photoDiv);
});

// Close the modal when the "close" span is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});