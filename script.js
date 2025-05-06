// Wait for the page to load
window.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to Grade 4 Batch Memories!");
  });

  // Scroll to Top Button
  const scrollButton = document.createElement("button");
  scrollButton.textContent = "↑ Top";
  scrollButton.id = "scrollTopBtn";
  document.body.appendChild(scrollButton);

  // Style the button
  scrollButton.style.position = "fixed";
  scrollButton.style.bottom = "20px";
  scrollButton.style.right = "20px";
  scrollButton.style.padding = "10px 15px";
  scrollButton.style.border = "none";
  scrollButton.style.borderRadius = "8px";
  scrollButton.style.backgroundColor = "#4CAF50";
  scrollButton.style.color = "#fff";
  scrollButton.style.cursor = "pointer";
  scrollButton.style.display = "none";
  scrollButton.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
  scrollButton.style.zIndex = "999";

  // Show/hide button on scroll
  window.addEventListener("scroll", () => {
    scrollButton.style.display = window.scrollY > 300 ? "block" : "none";
  });

  // Scroll to top when clicked
  scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Enlarge images on click
  const galleryImages = document.querySelectorAll(".photo-grid img, .teacher-photo, #mainPhoto");

  galleryImages.forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      const popup = document.createElement("div");
      popup.style.position = "fixed";
      popup.style.top = 0;
      popup.style.left = 0;
      popup.style.width = "100vw";
      popup.style.height = "100vh";
      popup.style.background = "rgba(0, 0, 0, 0.8)";
      popup.style.display = "flex";
      popup.style.alignItems = "center";
      popup.style.justifyContent = "center";
      popup.style.zIndex = 1000;

      const enlargedImg = document.createElement("img");
      enlargedImg.src = img.src;
      enlargedImg.alt = img.alt;
      enlargedImg.style.maxWidth = "90%";
      enlargedImg.style.maxHeight = "90%";
      enlargedImg.style.border = "4px solid white";
      enlargedImg.style.borderRadius = "10px";

      popup.appendChild(enlargedImg);
      document.body.appendChild(popup);

      // Close popup on click
      popup.addEventListener("click", () => {
        document.body.removeChild(popup);
      });
    });
  });
// Slideshow logic (previously shared)
const bondingImages = [
    "bond1.jpg", "bond2.jpg", "bond3.jpg", "bond4.jpg",
    "bond5.jpg", "bond6.jpg", "bond7.jpg", "bond8.jpg",
    "bond9.jpg", "bond10.jpg", "bond11.jpg", "bond12.jpg",
    "bond13.jpg","bond14.jpg","bond15.jpg","bond16.jpg",
    "bond17.jpg","bond18.jpg","bond19.jpg"
  ];

  let currentSlide = 0;
  const slideshowImage = document.getElementById("slideshowImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Audio player logic
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");

  function showSlide(index) {
    if (index < 0) currentSlide = bondingImages.length - 1;
    else if (index >= bondingImages.length) currentSlide = 0;
    else currentSlide = index;

    slideshowImage.src = bondingImages[currentSlide];
  }

  prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
  nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));

  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 4000);

  // Music control
  let isPlaying = false;

  playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
      audioPlayer.pause();
      playPauseBtn.textContent = "Play Music";
      isPlaying = false;
    } else {
      audioPlayer.play()
        .then(() => {
          playPauseBtn.textContent = "Pause Music";
          isPlaying = true;
        })
        .catch(error => {
          console.error("Playback failed:", error);
        });
    }
  });
