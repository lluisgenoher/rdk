import "./styles/Food.css";
import chicken from "../images/chicken.jpg";
import pork from "../images/pork.jpg";
import salmon from "../images/salmon.jpg";

export function Food() {
  return (
    <div className="container-food">
      <div className="grid">
        <article className="plate">
          <img src={chicken} alt="Pollo y pimiento" className="img" />
          <h3>Pollo y pimiento</h3>
          <p>Energética, con ingredientes antioxidantes</p>
        </article>

        <article className="plate">
          <img src={salmon} alt="Salmón y arroz" className="img" />
          <h3>Salmón y arroz</h3>
          <p>Ipoalergénica, con Omega 3 y 6</p>
        </article>

        <article className="plate">
          <img src={pork} alt="Cerdo y calabaza" className="img" />
          <h3>Cerdo y calabaza</h3>
          <p>Para dar vitalidad buena para el sistema inmune</p>
        </article>
        <article className="plate">
          <img src={chicken} alt="Pollo y pimiento" className="img" />
          <button href="#footer" type="button" className="your-recipe">
            Tu receta
          </button>
          <p className="last-plate">Ayudanos a decidir nuestra nueva receta</p>
        </article>
      </div>
    </div>
  );
}
