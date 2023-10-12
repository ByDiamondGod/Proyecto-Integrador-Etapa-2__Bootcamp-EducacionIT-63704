import TypeAlta from '../components/typewritters/TypeAlta';
import Formulario from '../components/formAlta/Formulario';
import Tabla from '../components/formAlta/Tabla';
import { useState } from 'react';

import './Alta.scss';

const Alta = () => {

    // Update => PUT [76]
    const [itemToUpdate, setItemToUpdate] = useState(null)

    return (
        <main>    
            <div className='heading'>
                <header className='heading__header'>
                    <h1>Alta</h1>
                    <span> <TypeAlta/> </span>
                </header>
            </div>
            <div>
                <Formulario itemToUpdate={itemToUpdate} setItemToUpdate={setItemToUpdate} />
                <Tabla setItemToUpdate={setItemToUpdate} />
            </div>
        </main>
    );
};

export default Alta;
