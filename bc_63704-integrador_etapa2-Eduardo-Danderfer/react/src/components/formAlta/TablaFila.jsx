
import { useContext } from 'react';
import ItemContext from '../../contexts/ItemContext';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import PropTypes from 'prop-types';

import './TablaFila.scss';

const TablaFila = ({ item, setItemToUpdate} ) => {

    const { deleteItemContext } = useContext(ItemContext);

    const handleDelete = (id) => {
        
        Swal.fire({
            title: '¿Estás seguro?',
            text: `No podrás revertir esta acción (ID: ${id})`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
            // El usuario ha confirmado la eliminación
            deleteItemContext(id);
            Swal.fire(
                '¡Listo!',
                'Tu producto ha sido eliminado.',
                'success'
            );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
            // El usuario ha cancelado la eliminación
            Swal.fire(
                'Cancelado',
                'Tu producto está a salvo',
                'error'
            );
            }
        });
          
        /*  console.warn(id);
        let isDelete = window.confirm(`¿Estas seguro de eliminar este producto? ${id}`);
        if (isDelete) {
            deleteItemContext(id);
        } else {
            return // stop = break
        } */
    }

    const handleUpdate = (item) => {
        Swal.fire({
            title: '¿Deseas editar?',
            text: `${item.name}`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Editar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                // El usuario ha confirmado la edición
                setItemToUpdate(item);

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // El usuario ha cancelado la edición

            }
        });
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
                    <button className='alta-table__button-row alta-table__button-row--edit'
                            onClick={() => handleUpdate(item)}>
                        Editar
                    </button>
                    <button className='alta-table__button-row alta-table__button-row--delete'
                            onClick={() => handleDelete(item.id)}>
                        Eliminar
                    </button>
                </div>
            </td>
        </tr>
    );
};

/* [84] */
TablaFila.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        company: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        pic: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        send: PropTypes.bool.isRequired,
    }).isRequired,
    setItemToUpdate: PropTypes.func.isRequired,
}

export default TablaFila;
