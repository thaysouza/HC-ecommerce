import React, { useState } from "react";
import "../../estilos/estilos.css";
import imgBurger from "../../img/burguer-home.png";
import imgSombra from "../../img/sombra.png";


const Home = () => {

  const [email, setEmail] = useState()

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor)
    alert('Dados enviados com sucesso!')
  }

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
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Seu e-mail" id="email" />
                  <button onClick={() => armazenar('ls_email', email)} className="button-info">Get a Burger</button>
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
