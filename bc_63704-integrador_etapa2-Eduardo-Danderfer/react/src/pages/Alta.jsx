import TypeAlta from '../components/typewritters/TypeAlta';

import Formulario from '../components/formAlta/Formulario';
import Tabla from '../components/formAlta/Tabla';

import './Alta.scss';

const Alta = () => {
    return (
        <main>    
            <div className='heading'>
                <header className='heading__header'>
                    <h1>Alta</h1>
                    <span> <TypeAlta/> </span>
                </header>
            </div>
            <div>
                <Formulario/>
                <Tabla />
            </div>
        </main>
    );
};

export default Alta;
