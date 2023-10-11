import { useContext } from 'react';
import ItemContext from '../contexts/ItemContext';

import Card from '../components/Card';
import TypeInicio from '../components/typewritters/TypeInicio'

import './Inicio.scss';

const Inicio = () => {
    const { items } = useContext(ItemContext);

    return (
        <main>
            <section className='hero'>
                <div className='heading'>
                    <header className='heading__header'>
                        <h1>Compra el planeta de tus sueños</h1>
                        <span> <TypeInicio /> </span> 
                    </header>
                </div>

                <div className='cards-container'>
                    {items && items.map((item, id) => 
                      <Card key = {id} propItems = {item} />
                    )}
                </div>
            </section>
            </main>
    );
};

export default Inicio;
