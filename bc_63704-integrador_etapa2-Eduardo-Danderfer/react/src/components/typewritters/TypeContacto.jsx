import Typewriter from 'typewriter-effect';

function TypeContacto() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            '¿Tenes dudas?',
            '¡Completa el formulario!',
            '¡Estamos para ayudarte!',
            'Te esperamos'
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

export default TypeContacto;