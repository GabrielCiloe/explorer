gsap.from('.header', {
    duration: 1,
    y: '-100%',
    ease: 'bounce'
})

gsap.from('.link', {
    duration: 1,
    opacity: 0,
    delay: 0.5,
    stagger: .5
})

gsap.from('.right', {
    duration: 1, 
    x: '-100vw', 
    delay: 1, 
    ease: 'power2.in'})

gsap.from('.left',{
    duration: 1,
    delay: 1.5,
    x: '-100%'
})
