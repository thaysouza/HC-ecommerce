
import React from "react";
import "../../estilos/combos.css";
import combo1 from "../../img/combo1.png";



const Combos = () => {


  return (
    <>
      <section className="area-principal-combos">
        <h1 className="classH1">Combos Especiais</h1>

        <div className="flex">


          <div id="area" className="area">
            <div>
              <img
                src={combo1}
                alt="Combo"
              />
              <p className="text-combo">Box burguer</p>
              <p className="text-value"><s>159,99</s></p>
              <h2>109,99</h2>
            </div>
          </div>

          <div id="area" className="area">
            <div>
              <img
                src={combo1}
                alt="Combo"
              />
              <p className="text-combo">Box burguer</p>
              <p className="text-value"><s>159,99</s></p>
              <h2>109,99</h2>
            </div>
          </div>

          <div id="area" className="area">
            <div>
              <img
                src={combo1}
                alt="Combo"
              />
              <p className="text-combo">Box burguer</p>
              <p className="text-value"><s>159,99</s></p>
              <h2>109,99</h2>
            </div>
          </div>



          <div id="area" className="area">
            <div>
              <img
                src={combo1}
                alt="Combo"
              />
              <p className="text-combo">Box burguer</p>
              <p className="text-value"><s>159,99</s></p>
              <h2>109,99</h2>
            </div>
          </div>



          <div id="area" className="area">
            <div>
              <img
                src={combo1}
                alt="Combo"
              />
              <p className="text-combo">Box burguer</p>
              <p className="text-value"><s>159,99</s></p>
              <h2>109,99</h2>
            </div>
          </div>


          <div id="area" className="area">
            <div>
              <img
                src={combo1}
                alt="Combo"
              />
              <p className="text-combo">Box burguer</p>
              <p className="text-value"><s>159,99</s></p>
              <h2>109,99</h2>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default Combos;