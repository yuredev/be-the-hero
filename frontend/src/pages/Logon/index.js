import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'

function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo"/>
                <form action="">
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua id"/>
                    <button type="submit" className="button">Entrar</button>
                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}

export default Logon;