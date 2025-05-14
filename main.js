gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
ease: "none"
});

tl.from("#image img", {
  scale: .001,
  duration: 1,
  transformOrigin: "center center",
}).to({}, {
  duration: 1
})
ScrollTrigger.create({
  trigger: "#image",
  start: "top top",
  end: "+=100%",
  pin: true,
  animation: tl,
  scrub: 0.78,
  pinSpacing: false
})