import React from "react";

import "../estilos/footer.css";
import mapa from "../img/mapa.png";

const Footer = () => {
  return (
    <>
      <footer className="area-footer">

        <div class="mapa">
          <img
            src={mapa}
            alt="mapa"
            width="300"
          />

        </div>
        <div className="dados">
          <div>
            <p>chocoburger@gmail.com</p>
            <p>+55 (11) 9999-9999</p>
            <p>Rua da liberdade, nº 305</p>
            <p>São paulo - SP</p>
          </div>
        </div>



      </footer>

      <div className="copy">
        <p>
          &copy; Hiring Coders - Todos os direitos Reservados -
          <a
            className="meu-nome-footer"
            href="https://www.linkedin.com/in/tayane-souza/"
            target="_blank"
          >
            {" "}
            Tayane Souza
          </a>
        </p>
      </div>


    </>
  );
};

export default Footer;
