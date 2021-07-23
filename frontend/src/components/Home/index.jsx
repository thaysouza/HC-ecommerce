import React from "react";
import { Link } from "react-router-dom";
import "../../estilos/estilos.css";
import imgBurger from "../../img/burguer-home.png";
import imgSombra from "../../img/sombra.png";


const Home = () => {

  return (
    <>


      <section className="area-index">

        <div className="info-index">
          <div>
            <h3 class="text-free">FREE</h3>
            <h3 class="text-burger">BURGER</h3>
            <p class="info-email">Informe seu E-mail e garanta já o seu !</p>


            <div className="content">
              <form id="form">
                <div className="input-group">
                  <input type="text" placeholder="Seu e-mail" id="email" />
                  <button className="button-info">Get a Burger</button>
                </div>
              </form>
            </div>

            <div className="back-info">
              <p>* Na compra de um combo você ganha um hambúrguer totalmente
                gratuito
              </p>
            </div>
          </div>
        </div>


        <div className="area-img-burguer">
          <div className="img-fluid">
            <div>
              <img
                className="img-burguer"
                src={imgBurger}
                alt="imagem de um Hamburguer"
              />
              <img
                className="sombra"
                src={imgSombra}
                alt="Sombra da imagem"
              />
            </div>
          </div>

        </div>

      </section>



    </>
  );
};

export default Home;
