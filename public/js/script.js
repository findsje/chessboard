document.addEventListener('DOMContentLoaded', () => {
    const displayElement = document.getElementById('display');
    
    if (displayElement) {
        displayElement.textContent = 'The script.js has loaded and updated this text!';
    }
});
