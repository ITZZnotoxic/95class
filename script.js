// Smooth start transition
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 1;
});

// Show modal with smooth effect
function showInfo(text) {
    const modal = document.getElementById('infoModal');
    const infoText = document.getElementById('infoText');

    infoText.textContent = text;
    modal.style.display = 'flex'; // Use 'flex' to enable centering
}

// Close modal
function closeInfo() {
    const modal = document.getElementById('infoModal');
    modal.style.display = 'none';
}
