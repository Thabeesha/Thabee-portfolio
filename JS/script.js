// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// scrolls section active link
let sections = document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height){
              navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
              });
        };
    });

    // Sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar when click navbar link (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtn = document.getElementById('read-more-btn');
  const additionalContent = document.getElementById('additional-content');

  // Add click event listener to "Read More" button
  readMoreBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      
      // Toggle visibility of additional content
      if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
          additionalContent.style.display = 'block'; // Show additional content
          readMoreBtn.textContent = 'Read Less'; // Change button text
      } else {
          additionalContent.style.display = 'none'; // Hide additional content
          readMoreBtn.textContent = 'Read More'; // Change button text
      }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      
      // Retrieve form input values
      const fullName = document.getElementById('fullName').value;
      const emailAddress = document.getElementById('emailAddress').value;
      const mobileNumber = document.getElementById('mobileNumber').value;
      const emailSubject = document.getElementById('emailSubject').value;
      const message = document.getElementById('message').value;

      // Perform client-side validation if needed

      // Prepare form data to send
      const formData = {
          fullName: fullName,
          emailAddress: emailAddress,
          mobileNumber: mobileNumber,
          emailSubject: emailSubject,
          message: message
      };

      // For demonstration purposes, log the form data to console
      console.log(formData);

      // You can add code here to send the form data to the server using AJAX or fetch API
      // and handle the response accordingly
  });
});




// typed js

const typed = new Typed('.multiple-text',{
  strings: ['Undergraduate Student', 'Director', 'Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});