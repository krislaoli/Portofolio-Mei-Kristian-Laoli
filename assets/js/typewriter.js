var app = document.getElementById("typewriter");

var typewriter = new Typewriter(app, {
  delay: 80,
  loop: true,
});

typewriter
  .typeString(`Frontend Web Developer`)
  .pauseFor(2000)
  .deleteAll()
  .typeString(`Backend Web Developer`)
  .pauseFor(2000)
  .deleteAll()
  .start();