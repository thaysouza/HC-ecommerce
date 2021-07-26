import React from "react";
import { Link } from "react-router-dom";
import "../estilos/estilos.css";
import Logo from "../img/logo2.png";


const Cabecalho = () => {

  function toggleMenu(event) {
    if (event.type === 'touchstart') {
      event.preventDefault();
    }
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  return (
    <>
      <header id="header">
        <div class="area-logo-nav">

          <img
            className="img-logo"
            src={Logo}
            alt="Logo Hamburguer"
          />

          <span class="text-nav text-warning ">ChocoBurger</span>
        </div>


        <nav id="nav">
          <button id="btn-mobile" area-label="Abrir Menu" aria-haspopup="true" aria-controls="menu"
            area-expanded="false" onClick={toggleMenu} onTouchStart={toggleMenu}>
            <span id="hamburger-button"></span>
          </button>
          <ul id="menu" role="menu">
            <li><Link className="link-menu" to="/">Home</Link></li>
            <li><Link className="link-menu" to="/">Combos</Link></li>
            <li><Link className="link-menu" to="/">Restaurantes</Link></li>
            <li><Link className="link-menu" to="/">Contato</Link></li>
            <li><Link className="link-menu link-button" to="/">Cadastro</Link></li>
          </ul>
        </nav>
      </header>
      <script src="home.js"></script>
    </>
  );
};

export default Cabecalho;
