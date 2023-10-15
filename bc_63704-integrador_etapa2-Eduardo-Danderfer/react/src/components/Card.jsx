import PropTypes from 'prop-types';
import './Card.scss';
import { useContext } from 'react';
import CarritoContext from '../contexts/CarritoContext';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const Card = ({ propItems }) => {
  const { agregarCarritoContext } = useContext(CarritoContext);

  const handleClick = (propItems) => {
    agregarCarritoContext(propItems);
    showSuccessNotification();
  }

  const showSuccessNotification = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2000,
    });

    Toast.fire({
      icon: 'success',
      title: '¡Agregado al carrito!',
    });
  }

  return (
    <>
      <div className="card">
        <article className="card__article">
          <div className="card__image-container">
            <img className="card__image" src={propItems.pic} alt={propItems.name} />
          </div>
          <div className="card__content">
            <h2 className="card__heading">{propItems.name}</h2>
            <div className="card__description">
              <p>{propItems.description}</p>
            </div>
            <button
              className="card__button"
              onClick={() => handleClick(propItems)}>
              COMPRAR
            </button>
          </div>
        </article>
      </div>
    </>
  )
}

Card.propTypes = {
  propItems: PropTypes.shape({
    pic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;