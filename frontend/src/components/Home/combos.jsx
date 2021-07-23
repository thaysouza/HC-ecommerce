import React from "react";
import "../../estilos/combos.css";
import combo1 from "../../img/combo1.png";


const Combos = () => {

  function mudarContainer() {

    const areaCombos = document.getElementById('area');
    areaCombos.classList.toggle('ativo');

  }


  return (
    <>
      <section className="area-principal-combos">
        <h1 className="classH1">Combos Especiais</h1>

        <div className="flex">

          <div id="area" className="area" onMouseOver={mudarContainer}>
            <div>
              <img
                src={combo1}
                alt="Combo"
              />
              <p>Combo Bazinga</p>
              <p>159,99</p>
              <h3>112,99</h3>
            </div>
          </div>

          <div className="area">
            <div>
              <img
                src={combo1}
                alt="Combo"
              />
              <p>Combo Bazinga</p>
              <h3>112,99</h3>
            </div>
          </div>

          <div className="area">
            <div>
              <img
                src={combo1}
                alt="Combo"
              />
              <p>Combo Bazinga</p>
              <h3>112,99</h3>
            </div>
          </div>

          <div className="area">
            <div>
              <img
                src={combo1}
                alt="Combo"
              />
              <p>Combo Bazinga</p>
              <h3>112,99</h3>
            </div>
          </div>

          <div className="area">
            <div>
              <img
                src={combo1}
                alt="Combo"
              />
              <p>Combo Bazinga</p>
              <h3>112,99</h3>
            </div>
          </div>

          <div className="area">
            <div>
              <img
                src={combo1}
                alt="Combo"
              />
              <p>Combo Bazinga</p>
              <h3>112,99</h3>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default Combos;