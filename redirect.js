// Simple redirect script
// Edit these two variables to control the page
const displayText = 'Example Site'; // <-- change what shows on the page
const redirectUrl = 'https://example.com'; // <-- change where the user will be redirected

const countdownStart = 1; // seconds before redirect

const elName = document.getElementById('displayName');
const elCountdown = document.getElementById('countdown');
const elGoNow = document.getElementById('goNow');

if (elName) elName.textContent = displayText;
if (elGoNow) elGoNow.href = redirectUrl;

let remaining = countdownStart;
if (elCountdown) elCountdown.textContent = String(remaining);

const timer = setInterval(() => {
  remaining -= 1;
  if (elCountdown) elCountdown.textContent = String(remaining);
  if (remaining <= 0) {
    clearInterval(timer);
    window.location.replace(redirectUrl);
  }
}, 1000);

if (elGoNow) {
  elGoNow.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace(redirectUrl);
  });
}

function isValidUrl(u) {
  try { new URL(u); return true; } catch (e) { return false; }
}

if (!isValidUrl(redirectUrl)) {
  console.warn('redirect.js: redirectUrl is not a valid URL.');
  clearInterval(timer);
}
