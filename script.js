const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('open');
  });
});

const destinations = [
  {
    name: 'Hiriketiya Beach',
    description: 'A relaxed palm-fringed shoreline known for calm mornings, sunset views, and easy beachside cafés.',
    image: 'image/Drone-shot-of-Hiriketiya-Bay-in-Sri-Lanka.jpg',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Hiriketiya+Beach'
  },
  {
    name: 'Hummanaya Blow Hole',
    description: 'A striking natural attraction with dramatic waves and one of the most unique coastal landscapes in the region.',
    image: 'image/LSL_B2_Hummanaya-Blow-Hole_800x1000.jpg',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Hummanaya+Blow+Hole'
  },
  {
    name: 'Blue Beach',
    description: 'A scenic coastal stop with clear water, surf energy, and a laid-back atmosphere for a slow afternoon escape.',
    image: 'image/Blue-Beach-Island-Sri-Lanka-1.webp',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Blue+Beach+Sri+Lanka'
  }
];

const locationPlaces = [
  {
    name: 'Hiriketiya Beach',
    description: 'A scenic beach known for surfing, sea views, and easygoing cafés along the coast.',
    image: 'image/Drone-shot-of-Hiriketiya-Bay-in-Sri-Lanka.jpg',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Hiriketiya+Beach'
  },
  {
    name: 'Surfing at Hiriketiya Beach',
    description: 'A lively surf spot known for beginner-friendly waves and a relaxed coastal atmosphere.',
    image: 'image/surfig.jpg',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Hiriketiya+Beach+Surfing'
  },
  {
    name: 'Blue Beach',
    description: 'A calm and scenic coastal spot with clear waters and a peaceful atmosphere for a relaxing day out.',
    image: 'image/Blue-Beach-Island-Sri-Lanka-1.webp',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Blue+Beach+Sri+Lanka'
  },
  {
    name: 'Hummanaya Blow Hole',
    description: 'A dramatic coastal attraction with powerful sea spray and striking natural scenery.',
    image: 'image/LSL_B2_Hummanaya-Blow-Hole_800x1000.jpg',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Hummanaya+Blow+Hole'
  }
];

function renderCards(containerId, items) {
  const grid = document.getElementById(containerId);

  if (!grid) {
    return;
  }

  grid.innerHTML = items
    .map((item) => `
      <article class="destination-card">
        <img src="${item.image}" alt="${item.name}" />
        <div class="destination-card-body">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <a class="map-link" href="${item.mapLink}" target="_blank" rel="noreferrer">
            View on Map
          </a>
        </div>
      </article>
    `)
    .join('');
}

function renderDestinations() {
  renderCards('destinations-grid', locationPlaces);
  renderCards('location-destinations-grid', locationPlaces);
}

document.addEventListener('DOMContentLoaded', renderDestinations);
