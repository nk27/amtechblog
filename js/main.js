window.addEventListener('DOMContentLoaded', (event) => {
    const fontSize = getComputedStyle(document.documentElement).fontSize;
    document.documentElement.style.fontSize = fontSize;
});