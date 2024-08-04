document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault();
          alert('Thank you for your message. I will get back to you soon!');
          this.reset();
      });
  }
});

