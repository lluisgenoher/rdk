import "./styles/Home.css";
import logo from "../images/logo.png";
import dog from "../images/imagen.png";
import arrow from "../images/arrow-orange-circle.png";

export function Home() {
  return (
    <div className="home-container">
      <img src={logo} className="logo" alt="logo" />

      <div className="left-side">
        <div className="content">
          <h1 className="h1">
            Alimentar bien a tu perro es más fácil que nunca.
          </h1>
          <p className="p">
            La nueva alimentación canina ha llegado. Con Kibus, podrás ofrecer a
            tu compañero comida sana, rica y recién cocinada de una forma fácil
            y cómoda
          </p>

          <div className="grid-btn">
            <button href="carousel" type="button" className="btn-book-now">
              <a href="#slider" className="a">
                Reserva Ahora
              </a>
            </button>

            <button href="carousel" type="button" className="btn-know-more">
              <a href="#footer">Quiero Saber Más</a>

              <img src={arrow} className="arrow" alt="Flecha" loading="lazy" />
            </button>
          </div>
        </div>
      </div>

      <div className="right-side">
        <img src={dog} alt="Perro con una persona"></img>
      </div>
    </div>
  );
}
