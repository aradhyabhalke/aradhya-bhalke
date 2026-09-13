const name = document.getElementById("name");
const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (event) => {

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Move background glow
    glow.style.left = mouseX + "px";
    glow.style.top = mouseY + "px";

    // Center of screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calculate mouse distance
    const moveX = (mouseX - centerX) / 25;
    const moveY = (mouseY - centerY) / 25;

    // Make the name follow the mouse
    name.style.transform =
        `translate(${moveX}px, ${moveY}px)`;
});