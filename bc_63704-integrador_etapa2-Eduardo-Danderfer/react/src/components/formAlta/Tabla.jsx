import { useContext } from 'react';
import ItemContext from '../../contexts/ItemContext';
import TablaFila from './TablaFila';

import './Tabla.scss';

const Tabla = () => {
    const {items} = useContext(ItemContext)

    return (
        <table className='alta-table'>
            <thead className='alta-table__header' >
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Marca</th>
                    <th>Categoría</th>
                    <th>Foto</th>
                    <th className='alta-table__description'>Detalles</th>
                    <th>Envío</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody className='alta-table__body'>
                {items && items.map((item, id) => (
                    <TablaFila key={id} item={item} />
                ))}
            </tbody>
        </table>
    );
};

export default Tabla;
 