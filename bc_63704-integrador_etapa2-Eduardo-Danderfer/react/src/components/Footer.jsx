import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="main-footer">
    <div className="main-footer__container-top">

      <section className="main-footer__information-container">
        <h3 className="main-footer__heading">Sobre</h3>
        <ul className="main-footer__list">
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Galaxy shop </a></li>
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Noticias </a></li>
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Fundador </a></li>
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Documentos </a></li>
        </ul>
      </section>

      <section className="main-footer__information-container">
        <h3 className="main-footer__heading">Ayuda</h3>
        <ul className="main-footer__list">
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Comprar </a></li>
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Términos </a></li>
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Privacidad </a></li>
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Contacto </a></li>
        </ul>
      </section>

      <section className="main-footer__information-container">
        <h3 className="main-footer__heading">Cuenta</h3>
        <ul className="main-footer__list">
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Resumen </a></li>
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Favoritos </a></li>
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Deseados </a></li>
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Ajustes </a></li>
        </ul>
      </section>

      <section className="main-footer__information-container">
        <h3 className="main-footer__heading">Puntos</h3>
        <ul className="main-footer__list">
          <li className="main-footer__items"> <a className="main-footer__links" href="#">Galaxy Coins </a></li>
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Obtener </a></li>
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Reclamar </a></li>
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Sorteos </a></li>
        </ul>
      </section>

      <section className="main-footer__information-container">
        <h3 className="main-footer__heading">Redes</h3>
        <ul className="main-footer__list">
          <li className="main-footer__items"> <a className="main-footer__links" href="#">Twitter</a></li>
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Facebook </a></li>
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> Instagram </a></li>
          <li className="main-footer__items"> <a className="main-footer__links" href="#"> YouTube </a></li>
        </ul>
      </section>
    </div>

    <div className="main-footer__container-bottom">
      <div className="main-footer__social">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="main-footer__social-link">
          <FontAwesomeIcon icon={faFacebook} size="xl" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="main-footer__social-link">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </a>
        <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="main-footer__social-link">
          <FontAwesomeIcon icon={faWhatsapp} size="xl" />
        </a>
      </div>
    </div>
      <div className="main-footer__info">
        <p className="main-footer__info-text">© 2023 ∾ Eddev</p>
      </div>


  </footer>
  )
}

export default Footer