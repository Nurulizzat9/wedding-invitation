// Countdown Timer to Wedding Date
const targetDate = new Date("2025-09-27T00:00:00").getTime();

const countdown = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        countdown.innerHTML = "It's the wedding day! 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s to go`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const attendance = document.getElementById('attendance').value;
    const guests = document.getElementById('guests').value;
    const message = document.getElementById('message').value;
  
    fetch('https://script.google.com/macros/s/AKfycbxFBRZgFfwkm-YXscPa0EPx1h6sA5QtZ4hsd1NsoTpFgwqQjJ4LfWZ6UkVsX06-k2vR/exec', {
        method: 'POST',
        body: JSON.stringify({ name, attendance, guests, message }),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(response => {
        console.log("Success:", response);
        document.getElementById('rsvpForm').reset();
        document.getElementById('rsvpConfirmation').classList.remove('hidden');
        })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
    });
});
  
// Modal close function
function closeModal() {
    document.getElementById('rsvpConfirmation').classList.add('hidden');
}
  
  
  
