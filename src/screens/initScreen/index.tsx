import React from "react";
import {useState} from "react";
import "./styles.css";


const InitScreen = () => {
    return(
        <>
            <section>
                <header>
                    <h2>Insira a Chave</h2>
                </header>
                    
                <div className="inputContainer">
                    <input type="text" />
                </div>

                <div className="buttonContainer">
                    <button>Entrar</button>
                </div>

                <footer>
                    <p>Caso ainda não tenha chave <a href="https://www.api-football.com/" target="_blank" className="link" >clique aqui</a>!</p>
                </footer>

            </section>
            
        </>

    )
}

export default InitScreen;