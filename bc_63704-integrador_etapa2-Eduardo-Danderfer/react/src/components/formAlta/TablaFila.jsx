/* eslint-disable react/prop-types */
import { useContext } from 'react';
import ItemContext from '../../contexts/ItemContext';
import Swal from 'sweetalert2/dist/sweetalert2.js';


import './TablaFila.scss';

const TablaFila = ({ item }) => {
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
                    <button className='alta-table__button-row alta-table__button-row--send'>
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


export default TablaFila;
