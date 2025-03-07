console.log('Happy developing ✨')

function scrollWindows(direction) {
    const container = document.getElementById("scrollContainer");
    const scrollAmount = 260;
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}