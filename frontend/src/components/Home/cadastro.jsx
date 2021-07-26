
import React, { useState, useEffect } from "react";
import "../../estilos/cadastro.css";
{/*import combo1 from "../../img/combo1.png";*/ }



const Cadastro = () => {

    const dadosData = JSON.parse(localStorage.getItem("dados"));

    const [dados, setDados] = useState(dadosData || []);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [fone, setFone] = useState("");

    const handleName = e => {
        setName(e.target.value);
    };

    const handleEmail = e => {
        setEmail(e.target.value);
    };

    const handleFone = e => {
        setFone(e.target.value);
    };

    const addDados = e => {
        e.preventDefault();
        setDados([...dados, {
            name,
            email,
            fone
        }]);
        setName("");
        setEmail("");
        setFone("");
    };

    const removePost = (email) => {
        setDados(dados.filter(item => item.email !== email));
    }


    useEffect(() => {
        localStorage.setItem("dados", JSON.stringify(dados));
    })

    return (
        <>
            <section className="area-cadastro">

                <h1 className="title-cadastro">Cadastro de Usuário</h1>

                <div className="content">
                    <form id="form" onSubmit={addDados}>
                        <h1>Nome Completo</h1>
                        <input value={name} onChange={handleName} type="text" placeholder="Informe seu nome" />
                        <h1>E-mail</h1>
                        <input value={email} onChange={handleEmail} type="text" placeholder="meuemail@gmail.com" />
                        <h1>Telefone</h1>
                        <input value={fone} onChange={handleFone} type="number" placeholder="(11)99999-9999" /><br />

                        <button className="button-form" type="submit">Enviar</button>

                        {dados.map(item => (


                            <div key={item.name} className="retorno-dados">
                                <div>
                                    <p>Nome: {item.name}</p>
                                    <p>Email: {item.email}</p>
                                    <p>Telefone: {item.fone}</p>

                                    <span>
                                        <button className="button-retorno" onClick={() => removePost(item.email)}>X</button>
                                    </span>
                                </div>

                            </div>
                        ))}

                    </form>



                </div>

            </section>
        </>
    );
};

export default Cadastro;