// const paragraphElement = document.getElementById('writer-p');

// lo correcto seria usar esto para el p del html, usando la id writer-p
// pero no puedo hacerlo porque el proyecto no permite modificar el html
// asi que lo hago con el querySelector especifico

/* --------------------------INDEX------------------------------ */

const paragraphElement = document.querySelector('header p');

let typewriter = new Typewriter(paragraphElement, {
  loop: true,
});

typewriter 
  .typeString('¿Que esperas para tu propiedad en el espacio?')
  .pauseFor(6000)
  .deleteAll()
  .typeString('¿Tal vez prefieras un pasaporte extraterrestre?')
  .pauseFor(6000)
  .deleteAll()
  .typeString('¡Lo que sea, nosotros lo tenemos!')
  .pauseFor(5000)
  .deleteAll()
  .typeString('Galaxy Shop, tu tienda de confianza.')
  .pauseFor(30000)
  .start()

/* -------------------------ALTA--------------------------------- */

const paragraphElement2 = document.getElementById('writer-alta');

let typewriter2 = new Typewriter(paragraphElement2, {
  loop: true,
});

typewriter2
  .typeString('Genera tu producto')
  .pauseFor(4000)
  .deleteChars(9)
  .typeString('s ideas')
  .pauseFor(5000)
  .deleteAll()
  .typeString('Hazlo realidad con Galaxy Shop')
  .pauseFor(6000)
  .deleteAll()
  .start()

/* ---------------------------CONTACTO------------------------------ */

const paragraphElement3 = document.getElementById('writer-contacto');

let typewriter3 = new Typewriter(paragraphElement3, {
  loop: true,
});

typewriter3
  .typeString('¿Tenes dudas?')
  .pauseFor(6000)
  .deleteAll()
  .typeString('¡Completa el formulario!')
  .pauseFor(6000)
  .deleteAll()
  .typeString('¡Estamos para ayudarte!')
  .pauseFor(5000)
  .deleteAll()
  .typeString('Te esperamos')
  .pauseFor(30000)
  .start()


/* -------------------------NOSOTROS------------------------------- */

/* const paragraphElement4 = document.getElementById('writer-nosotros');

let typewriter4 = new Typewriter(paragraphElement4, {
  loop: true,
});

typewriter4
  .typeString('¿1?')
  .pauseFor(6000)
  .deleteAll()
  .typeString('¿2?')
  .pauseFor(6000)
  .deleteAll()
  .typeString('¡3!')
  .pauseFor(5000)
  .deleteAll()
  .typeString('4')
  .pauseFor(30000)
  .start() */

/* ----------------------------------------------------------------- */

export {
  typewriter,
  typewriter2,
  typewriter3,
  // typewriter4
}