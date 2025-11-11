document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(DrawSVGPlugin)
    // gsap code here!
    gsap.from(".draw-me", {
        duration: 4,
        stagger: .3,
        drawSVG: "0%"
    });
});