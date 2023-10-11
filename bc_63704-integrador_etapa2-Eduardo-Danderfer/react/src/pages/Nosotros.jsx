import TypeNosotros from '../components/typewritters/TypeNosotros';
import './Nosotros.scss';

const Nosotros = () => {
    return (
            <main>
                <div className='heading'>
                    <header className='heading__header'>
                        <h1>Nosotros</h1>
                        <span> <TypeNosotros/> </span>
                    </header>
                </div>
            
            <div className="main-nosotros">

                <section className="main-nosotros__about">

                    <div className="main-nosotros__about-top">
                        <h2> El futuro del espacio </h2>
                        <p> Galaxy Shop es un E-Commerce que te ayuda a despegar de la Tierra hacia lo desconocido</p>
                    </div>

                </section>

                <div className="main-nosotros__about-us">
                    <div className="img-1"><img src="/img/girl-grid-1.webp" alt="girl-space"/> </div>
                    <div className="text-1">
                        <h2>Nuestra vision</h2>
                        <p>En Galaxy Shop estamos para ofrecerte una experiencia única. Nuestra pasión por los misterios de
                            la galaxia y el deseo de compartir su belleza, nos lleva a brindarte la oportunidad de poseer un
                            pedacito del universo. Únete a nosotros en este viaje estelar y descubre un nuevo nivel de
                            conexión con el espacio</p>
                    </div>
                    <div className="img-2"> <img src="/img/girl-grid-2.webp" alt="girl-space-2"/></div>
                    <div className="text-2">
                        <h2>¿Quienes somos?</h2>
                        <p>Somos viajeros del espacio, con el objetivo de brindarte la oportunidad de experimentar la
                            grandeza del universo de una manera completamente nueva. Con un equipo profesional de
                            astrónomos, científicos, programadores y ingenieros. Estamos comprometidos a hacer que la
                            maravilla del sistema solar, esté al alcance de todos. </p>
                    </div>
                </div>
            </div>
        </main>
            
    );
};

export default Nosotros;
