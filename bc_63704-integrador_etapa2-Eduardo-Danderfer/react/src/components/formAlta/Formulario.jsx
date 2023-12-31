import { useContext, useEffect, useState } from 'react';
import ItemContext from '../../contexts/ItemContext';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { useFormChange } from '../../hooks/useFormChange';
import './Formulario.scss';


// Crud = Create POST Item

const initForm = {
  id: null,
  name: '',
  description: '',
  pic: '',
  price: '',
  stock: '',
  company: '',
  category: '',
  send: false,
}


const Formulario = ({itemToUpdate, setItemToUpdate}) => {

  // CREATE
  const [form, setForm, handleChange] = useFormChange(initForm) /* [89]  */
  const { createItemContext, updateItemContext } = useContext(ItemContext)
  
  // Aparece si se edita un producto [94]
  const [isEditing, setIsEditing] = useState(false); //

  // Update => PUT [77]
  useEffect(() => {
    if (itemToUpdate) {
      setForm(itemToUpdate);
      setIsEditing(true); 
    } else {
      setForm(initForm);
      setIsEditing(false); 
    }
  }, [itemToUpdate, setForm, setItemToUpdate]);


    // Función para mostrar notificación de envío exitoso
    const showEnvioSuccessNotification = () => {
      Swal.fire({
        icon: 'success',
        title: 'Envío exitoso',
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
      });
    };
  
    // Función para mostrar notificación de edición exitosa
    const showEdicionSuccessNotification = () => {
      Swal.fire({
        icon: 'success',
        title: 'Edición exitosa',
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
      });
    };


  // Envio de informacion en el formulario [59]
  const handleSubmit = async (e) => {

    e.preventDefault();
    // console.log('Formulario enviado');

    // [78]
    try {
      
      if (form.id === null) {
        await createItemContext(form);
        showEnvioSuccessNotification()
        
      } else {
        await updateItemContext(form);
        showEdicionSuccessNotification()
      }
  
      // resetea al enviar un nuevo producto
      handleReset();

    } catch (error) {
      console.error('Error found in handleSubmit:', error);
    }

  };


  // Reset default de los inputs en el formulario [65]
  const handleReset= () => {
    setForm(initForm);
    setIsEditing(false)
  };


  // Blur y Focus
  const [focusedField, setFocusedField] = useState(null);

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  }

  const handleBlur = () => {
    setFocusedField(null);
  }

  return (
    <div className='alta-form'>
      <h2 className='alta-form__title'>{isEditing ? 'Editar producto' : 'Agregar producto'}</h2>
      <form onSubmit={handleSubmit} className='alta-form__form'>
        <div className='alta-form__input-container'>
          <label htmlFor="lbl-name" className='alta-form__label'>Nombre</label>
          <input
            className='alta-form__input'
            type="text"
            name="name"
            id="lbl-name"
            placeholder={focusedField === 'nombre' ? '' : 'Nombre del producto'}
            onFocus={() => handleFocus('nombre')}
            onBlur={handleBlur}
            autoFocus
            required
            maxLength="15"
            value = {form.name}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div className='alta-form__input-container'>
          <label htmlFor="price" className='alta-form__label'>Precio</label>
          <input
            className='alta-form__input'
            type="number"
            name="price"
            id="price"
            placeholder={focusedField === 'precio' ? '' : 'Precio en USD'}
            onFocus={() => handleFocus('precio')}
            onBlur={handleBlur}
            required
            maxLength="15"
            value = {form.price}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div className='alta-form__input-container'>
          <label htmlFor="stock" className='alta-form__label'>Stock</label>
          <input
            className='alta-form__input'
            type="number"
            name="stock"
            id="stock"
            placeholder={focusedField === 'stock' ? '' : 'Cantidad en stock'}
            onFocus={() => handleFocus('stock')}
            onBlur={handleBlur}
            required
            maxLength="15"
            value = {form.stock}
            onChange={handleChange}
            autoComplete='off'
          />
        </div>

        <div className='alta-form__input-container'>
          <label htmlFor="company" className='alta-form__label'>Marca</label>
          <input
            className='alta-form__input'
            type="text"
            name="company"
            id="company"
            placeholder={focusedField === 'marca' ? '' : 'Nombre de la marca'}
            onFocus={() => handleFocus('marca')}
            onBlur={handleBlur}
            required
            maxLength="15"
            value = {form.company}
            onChange={handleChange}
            autoComplete='off'
          />
        </div>

        <div className='alta-form__input-container'>
          <label htmlFor="category" className='alta-form__label'>Categoría</label>
          <input
            className='alta-form__input'
            type="text"
            name="category"
            id="category"
            placeholder={focusedField === 'categoria' ? '' : 'Categoría del producto'}
            onFocus={() => handleFocus('categoria')}
            onBlur={handleBlur}
            required
            maxLength="15"
            value = {form.category}
            onChange={handleChange}
            autoComplete='off'
          />
        </div>

        <div className='alta-form__input-container'>
          <label htmlFor="description" className='alta-form__label'>Detalles</label>
          <input
            className='alta-form__input'
            type="text"
            name="description"
            id="description"
            placeholder={focusedField === 'detalles' ? '' : 'Detalles del producto'}
            onFocus={() => handleFocus('detalles')}
            onBlur={handleBlur}
            required
            maxLength="40"
            value = {form.description}
            onChange={handleChange}
            autoComplete='off'
          />
        </div>

        <div className='alta-form__input-container'>
          <label htmlFor="pic" className='alta-form__label'>Foto</label>
          <input
            className='alta-form__input'
            type="text"
            name="pic"
            id="pic"
            placeholder={focusedField === 'foto' ? '' : 'URL de la imagen del producto'}
            onFocus={() => handleFocus('foto')}
            onBlur={handleBlur}
            maxLength="40"
            value = {form.pic}
            onChange={handleChange}
            autoComplete='on'
          />
        </div>

        <div className='alta-form__input-container'>
          <label htmlFor="send" className='alta-form__label'>Envío</label>
          <input
            className='alta-form__input'
            type="checkbox"
            name="send"
            id="send"
            checked = {form.send}
            onChange={handleChange}
            autoComplete='off'
          />
          <span className="alta-form__custom-checkbox"></span>
        </div>

        <div className="alta-form__buttons">
          <button className="alta-form__button alta-form__button--send" type="submit">Enviar</button>
          <button className="alta-form__button alta-form__button--delete" type="reset" onClick={handleReset}>Limpiar</button>
        </div>
      </form>
    </div>
  );
}

/* [84] */
Formulario.propTypes = {
  itemToUpdate: PropTypes.object,
  setItemToUpdate: PropTypes.func.isRequired
};

export default Formulario;
