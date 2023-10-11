import Typewriter from 'typewriter-effect';

function TypeAlta() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            'Genera tu producto',
            'Genera tu idea',
            'Hazlo realidad en Galaxy Shop'
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

export default TypeAlta;