import { useContext } from 'react';
import ItemContext from '../contexts/ItemContext';
import Card from '../components/Card';
import './Inicio.scss';

const Inicio = () => {
    const { items } = useContext(ItemContext);

    return (
        <main>
            <section className='section-cards'>
                <header className='section-cards__header'>
                    <h1>Compra el planeta de tus sueños</h1>
                    <p>¿Que esperas para tu terreno espacial?</p>
                </header>

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
