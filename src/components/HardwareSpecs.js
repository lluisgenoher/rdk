import "./styles/HardwareSpecs.css";
import productApp from "../images/product-app.png";
import product from "../images/product.png";
import app from "../images/app.png";

import spec1 from "../images/programable/spec1.png";
import spec2 from "../images/programable/spec2.png";
import spec3 from "../images/programable/spec3.png";
import spec4 from "../images/programable/spec4.png";
import spec5 from "../images/programable/spec5.png";
import spec6 from "../images/programable/spec6.png";

export function HardwareSpecs() {
  return (
    <div className="stats-container">
      <div className="tech-spec">
        <ul>
          <li>
            <img
              src={spec1}
              alt="Programable 24 horas"
              className="spec-img"
              loading="lazy"
            />
            <a className="li-text">Programable 24h</a>
          </li>
          <li>
            <img
              src={spec2}
              alt="Programable 24 horas"
              className="spec-img"
              loading="lazy"
            />
            <a className="li-text">Agua siempre disponible</a>
          </li>
          <li>
            <img
              src={spec3}
              alt="Programable 24 horas"
              className="spec-img"
              loading="lazy"
            />
            <a className="li-text">Cantidad personalizable</a>
          </li>
          <li>
            <img
              src={spec4}
              alt="Programable 24 horas"
              className="spec-img"
              loading="lazy"
            />
            <a className="li-text">Historial de las comidas</a>
          </li>
          <li>
            <img
              src={spec5}
              alt="Programable 24 horas"
              className="spec-img"
              loading="lazy"
            />
            <a className="li-text"> Facil de usar y lavar</a>
          </li>
          <li>
            <img
              src={spec6}
              alt="Programable 24 horas"
              className="spec-img"
              loading="lazy"
            />
            <a className="li-text">App para iOS y Android</a>
          </li>
        </ul>
      </div>
      <div className="tech-img">
        <img
          src={productApp}
          alt="Producto y aplicación"
          loading="lazy"
          className="img-desktop"
        ></img>
        <img
          src={product}
          alt="Producto"
          loading="lazy"
          className="img-mobile product"
        ></img>
        <img
          src={app}
          alt="Aplicación"
          loading="lazy"
          className="img-mobile app"
        ></img>
      </div>
    </div>
  );
}

export default HardwareSpecs;
