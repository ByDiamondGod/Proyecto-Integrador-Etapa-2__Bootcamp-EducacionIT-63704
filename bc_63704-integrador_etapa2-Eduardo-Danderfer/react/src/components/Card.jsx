import PropTypes from 'prop-types';
import './Card.scss'

const Card = ({ propItems }) => {
  
  return (
    <>
      <a href="#" className="card">
          <article className="card__article">

            <div className="card__image-container">
              <img className="card__image" src={propItems.pic} alt={propItems.name} />
            </div>

            <div className="card__content">
              <h2 className="card__heading">{propItems.name}</h2>
              <div className="card__description">
                <p>{propItems.description}</p>
              </div>
            </div>
        </article>
        
        </a>
    </>
  )
}

/* [84] */
Card.propTypes = {
  propItems: PropTypes.shape({
    pic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;