import "./styles/Footer.css";
import payment from "../images/payment.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import logo from "../images/phone/logo.png";

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div>
          <img src={logo} className="phone-logo" alt="logo" />
        </div>

        <div className="footer-main">
          <div className="footer-column">
            <h3 className="footer-heading">Sobre KIBUS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading policies">Políticas</h3>
            <ul>
              <li>Politícas de privacidad</li>
              <li>Condiciones de uso</li>
              <li>Cookies</li>
              <li className="li-faq">FAQ</li>
            </ul>
          </div>
          <div className="footer-column contact">
            <h3 className="footer-heading">Contáctenos</h3>
            <ul>
              <li>Location</li>
              <li>Telefono</li>
            </ul>
          </div>
          <div className="footer-column social">
            <img
              src={facebook}
              className="social-media facebook"
              alt="Facebook"
            ></img>
            <img
              src={instagram}
              className="social-media instagram"
              alt="Instagram"
            ></img>
            <img
              src={youtube}
              className="social-media youtube"
              alt="Youtube"
            ></img>
          </div>
          <div className="footer-column">
            <h3 className="footerHeading">Métodos de pago</h3>
            <img
              src={payment}
              className="payment"
              alt="Mastercard Visa Apple Pay Google Pay"
            ></img>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
