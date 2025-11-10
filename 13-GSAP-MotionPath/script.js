document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)
    // Initialize Lenis
    const lenis = new Lenis({
        autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
        console.log(e);
    });

    // gsap code here!
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1300px)", () => {
        // desktop setup code here...
        let tl = gsap.timeline({
            scrollTrigger: ({
                trigger: "box",
                start: "10% 5%",
                end: "270% 100%",
                // markers: true,
                scrub: 3
            })
        })

        tl.to(".plane", {
            motionPath: {
                path: ".line",
                align: ".line",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
            },
            transformOrigin: "50% 50%",
            // duration: 50,
            ease: "linear",
        });
    });

    mm.add("(max-width: 799px)", () => {
        // mobile setup code here...
    });


});
