// Load Vanilla Tilt library
const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js";
script.onload = () => {
  const profilePic = document.querySelector(".profile-pic");
  if (profilePic) {
    VanillaTilt.init(profilePic, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
      scale: 1.05
    });
  }
};
document.head.appendChild(script);

document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.background = '#0077cc';
      card.style.color = 'white';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.background = '#fff';
      card.style.color = '#333';
    });
  });
  