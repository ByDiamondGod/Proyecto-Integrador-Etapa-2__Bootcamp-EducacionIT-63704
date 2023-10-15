import Typewriter from 'typewriter-effect';

function TypeCarrito() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            '¡Hora de compras!',
            'Gracias por tu inversion',
          ],
          autoStart: true,
          loop: true,
          pauseFor: 20000,
          deleteSpeed: "natural"
        }}
      />
    </div>
  );
}

export default TypeCarrito;