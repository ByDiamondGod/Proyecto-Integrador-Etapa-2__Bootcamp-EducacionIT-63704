import Typewriter from 'typewriter-effect';

function TypeNosotros() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            '¿Que somos?',
            '¿Que hacemos?',
            'Somos Galaxy Shop'
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

export default TypeNosotros;