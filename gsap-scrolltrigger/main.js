gsap.registerPlugin(ScrollTrigger);


gsap.to('.square', {
    y: '-50vh',
    width: 800,
    duration: 3, 
    scrollTrigger: {
        trigger: '.square',
        start: '20% bottom',
        markers: true,
        scrub: true
    },

})

