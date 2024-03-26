
const iframe = document.querySelector('iframe');
if ('allow' in iframe) {
  
  iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
}

const form = document.getElementById('reservation-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  
  if (name.trim() === '' || email.trim() === '') {
    alert('Please enter your name and email');
    return;
  }

 
  console.log('Form submitted:', { name, email, phone });

  
  form.reset();

  alert('Your reservation has been submitted successfully!');
});


const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

window.addEventListener('scroll', () => {
  const heroImage = document.querySelector('.hero-image img');
  const scrollPosition = window.pageYOffset;

  heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});