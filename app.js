// DOM Elements
console.log('subscribe to hnn3g4r');
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

// Apply the cached theme on reload

// Button Event Handlers

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
};

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
};

solarButton.onclick = () => {
    if (body.classList.contains('solar')) {
        body.classList.remove('solar');
        solarButton.style.cssText = `
      --bg-solar: var(--yellow);
    `;

        solarButton.innerText = 'solarize';
    } else {
        solarButton.style.cssText = `
      --bg-solar: white;
    `;

        body.classList.add('solar');
        solarButton.innerText = 'normalize';
    }
};
