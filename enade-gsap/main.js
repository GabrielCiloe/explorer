gsap.registerPlugin(ScrollTrigger)


// Mouse position
let mouseX, mouseY;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;


  // Add GSAP Effect
  gsap.to(".instrumentos", {
    // The '30' value bellow corresponds to the effect power, change it as you want
    x: (mouseX / window.innerWidth - 0.5) * 30,
    y: (mouseY / window.innerHeight - 0.5) * 30,
    delay: 0.1,
    ease: "power2.out",
    overwrite: "auto"
  });

  // Add GSAP Effect
  gsap.to(".faculdade", {
    // The '30' value bellow corresponds to the effect power, change it as you want
    x: (mouseX / window.innerWidth - 0.5) * 30,
    y: (mouseY / window.innerHeight - 0.5) * 30,
    delay: 0.1,
    ease: "power2.out",
    overwrite: "auto"
  });
});

//Acordion JS
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle('active');

    if (button.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = 0;
    }

    // Close other open accordion items
    document.querySelectorAll('.accordion-header').forEach(otherButton => {
      if (otherButton !== button) {
        otherButton.classList.remove('active');
        otherButton.nextElementSibling.style.maxHeight = 0;
      }
    });
  });
});








gsap.from(".nota1", {
  xPercent: -400,
  duration: 2,
  ease: Power3.out,
  opacity: 0.5
})

gsap.from(".nota2", {
  xPercent: 400,
  duration: 2,
  ease: Power3.out,
  opacity: 0.5
})

gsap.from(".teclado", {
  xPercent: -300,
  duration: 3,
  ease: "power3.out",
  opacity: 0.5
})

gsap.from(".notebook", {
  xPercent: 300,
  duration: 3,
  ease: "power3.out",
  opacity: 0.5
})

gsap.timeline()
  .from(".predioFaculdade", {
    y: 700,
    duration: 2,
    delay: 1,
    ease: "power3.out",
    opacity: 0
  })
  .from(".enadeTitle", {
    y: 500,
    duration: 1.3,
    ease: "power3.out",
    opacity: 0
  })
  .from(".modelos", {
    y: 50,
    duration: 1,
    ease: "power3.out",
    opacity: 0
  })

gsap.from(".enadeDate div", {
  y: 100,
  stagger: 0.5,
  duration: 1,
  opacity: 0,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".video",
    start: "top 20%",
  },
})

gsap.from(".assistaVideo", {
  y: 100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".video",
    start: "top 40%",
  },
})

gsap.from(".maxcontainer div iframe ", {
  y: 100,
  delay: 1.5,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".assistaVideo",
    start: "top 40%",
  },
})

gsap.from(".starsVideo img", {
  y: 100,
  stagger: 0.1,
  duration: 0.3,
  delay: 2,
  ease: "power4.out",
  opacity: 0,
  scrollTrigger: {
    trigger: ".enadeDate",
    start: "top 40%",

  },
})

gsap.from(".alunoVideo", {
  y: 100,
  duration: 1,
  delay: 3.5,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".enadeDate",
    start: "top 40%",

  },
})



