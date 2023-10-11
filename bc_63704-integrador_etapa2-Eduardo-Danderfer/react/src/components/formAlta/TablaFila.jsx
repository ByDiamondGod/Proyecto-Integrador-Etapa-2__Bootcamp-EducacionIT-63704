/* eslint-disable react/prop-types */
import './TablaFila.scss';

const TablaFila = ({ item }) => {

    const handleDelete = (id) => {
        console.warn(id);
    }


    return (
        <tr className='alta-table__row'>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.stock}</td>
            <td>{item.company}</td>
            <td>{item.category}</td>
            <td>
                <img src={item.pic} alt={item.name} className='alta-table__img' />
            </td>
            <td className='alta-table__description'>{item.description}</td>
            <td>{item.send ? 'Si' : 'No'}</td>
            <td>
                <div className='alta-table__buttons-row'>
                        <button className='alta-table__button-row alta-table__button-row--send' >Editar</button>
                        <button className='alta-table__button-row alta-table__button-row--delete' onClick={() => handleDelete(item.id) } >Eliminar</button>
                </div>
            </td>
        </tr>
    );
};


export default TablaFila;
