document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById('contact-form');
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault();
          alert('Thank you for your message. I will get back to you soon!');
          this.reset();
      });
  }

  if (menuIcon) {
      menuIcon.addEventListener("click", function() {
          navLinks.classList.toggle("active");
      });
  }
});


