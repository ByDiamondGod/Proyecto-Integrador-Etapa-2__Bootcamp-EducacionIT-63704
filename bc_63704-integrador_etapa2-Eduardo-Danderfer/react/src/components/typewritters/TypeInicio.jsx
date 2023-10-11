import Typewriter from 'typewriter-effect';

function TypeInicio() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            '¿Que esperas para tu propiedad en el espacio?',
            '¿Tal vez prefieras un pasaporte extraterrestre?',
            '¡Lo que sea, nosotros lo tenemos!',
            'Galaxy Shop, tu tienda de confianza.'
          ],
          autoStart: true,
          loop: true,
          pauseFor: 4000,
          deleteSpeed: "natural"
        }}
      />
    </div>
  );
}

export default TypeInicio;