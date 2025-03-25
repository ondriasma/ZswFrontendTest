console.log('Happy developing ✨')

function scrollWindows(containerID, direction) {
    const container = document.getElementById(containerID);
    const scrollAmount = 260;
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}