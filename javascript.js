document.addEventListener("DOMContentLoaded", function () {
    // Function to dynamically add your photo
    function addPhoto() {
        var photoContainer = document.getElementById("photo-container");
        var photo = document.createElement("img");
        photo.src = "IMG_4607.JPG"; // Replace with the actual path to your photo
        photo.alt = "Ella";
        photoContainer.appendChild(photo);
    }

    // Call the function to add the photo when the page loads
    addPhoto();
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetSectionId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
  
          // Optional: Highlight the clicked link (add or remove a class)
          navLinks.forEach(link => link.classList.remove('active'));
          this.classList.add('active');
        }
      });
    });
  });
  
