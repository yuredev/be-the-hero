import React from 'react';
import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'

function Logon() {
    return (
        <div className="logo-container">
            <section className="form">
                <img src={logoImg} alt="logo"/>
                <form action="">
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua id"/>
                    <button type="submit">Entrar</button>
                    <FiLogIn size={16} color="#E02041"/>
                    <a href="/register">
                        Não tenho cadastro
                    </a>
                </form>

            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}

export default Logon;