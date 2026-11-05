# Main Portfolio

My earlier personal portfolio website: a multi-page static site built with HTML, CSS and JavaScript. It introduces me, lists my skills, links to my front-end mini projects, and has separate pages for certifications, achievements and my resume.

**Live demo:** https://amithviswas.github.io/Main-Portfolio/

## Features
- **Home page**: intro section with a 3D tilt-and-glare profile picture (Vanilla Tilt), interactive skill cards, and a "show projects" toggle.
- **Projects section** linking to live demos of my mini projects: Landing Page, Home Theater Experience, a reverse-engineered Twitch.tv UI, Music Player, Dark Run scroll game and an old-style Car Game.
- **Certifications page**: NPTEL Software Testing, Academor internship, and Full Stack Development with Python & Django (CipherSchools).
- **Achievements page**: Event Manager at UNYC and the Outstanding Performance Award from Academor.
- **Resume page**: resume preview image with a PDF download link.
- **Contact section**: simple front-end-only form (shows a confirmation, no backend) plus GitHub, LinkedIn and Instagram links.

## Tech stack
- HTML5
- CSS3
- Vanilla JavaScript
- [Vanilla Tilt](https://micku7zu.github.io/vanilla-tilt.js/) (loaded from CDN)
- Font Awesome icons
- Hosted on GitHub Pages

## Run locally
No build step is needed.

```bash
git clone https://github.com/amithviswas/Main-Portfolio.git
cd Main-Portfolio
# open index.html in your browser, or:
python -m http.server 8000
```

## Project structure
```
Main-Portfolio/
├── index.html            # home: intro, skills, projects, contact
├── certifications.html
├── achievements.html
├── resume.html
├── style.css
└── script.js             # Vanilla Tilt setup + skill card hover effects
```

> My current portfolio is at **[avr-portfolio-m5.netlify.app](https://avr-portfolio-m5.netlify.app)**.

## Author
**Amith Viswas Reddy**: Salesforce engineer at Accenture
- Portfolio: [avr-portfolio-m5.netlify.app](https://avr-portfolio-m5.netlify.app)
- LinkedIn: [linkedin.com/in/amith-viswas-reddy](https://www.linkedin.com/in/amith-viswas-reddy)
- GitHub: [@amithviswas](https://github.com/amithviswas)

## License
Released under the [MIT License](LICENSE).
