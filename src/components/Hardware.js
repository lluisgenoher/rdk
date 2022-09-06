import "./styles/Hardware.css";
import product from "../images/carousel-1.png";
import ellipse from "../images/ellipse.png";
import arrow from "../images/arrow-orange-circle.png";

export function Hardware() {
  return (
    <div className="tech-container">
      <div className="tech-carousel">
        <img src={ellipse} alt="Ellipse" className="ellipse"></img>

        <img src={product} alt="Slide 1" className="slide" id="slider"></img>
      </div>
      <div className="tech-info">
        <h2 className="h2">Mejor para ellos, más fácil y cómodo para ti</h2>
        <p className="p-desktop">
          Con Kibus, nunca tendrás que preocuparte de cómo ofrecer una dieta
          sana y natural a tu perro de forma cómoda y rápida. Nuestro
          dispositivo cocina automáticamente la cantidad exacta en cada comida e
          incluso lo puedes programar a través de la app. Tu perro disfrutará
          comida de casera de primera calidad, con el mínimo esfuerzo.
        </p>
        <p className="p-mobile">
          Con Kibus, nunca tendrás que preocuparte de cómo ofrecer una dieta
          sana y natural a tu perro de forma cómoda y rápida. Nuestro
          dispositivo cocina automáticamente la cantidad exacta en cada comida y
          hasta lo puedes programar a distancia a través de la App. Tu perro
          aprovechará comida de calidad casera, con el mínimo esfuerzo
        </p>
        <div className="grid-btn">
          <button type="button" className="btn-book-now">
            <a href="#footer" className="a">
              Reserva Ahora
            </a>
          </button>

          <button type="button" className="btn-know-more">
            <a href="#footer"> Quiero Saber Más</a>
            <img src={arrow} className="arrow" alt="Flecha" loading="lazy" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hardware;
