import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css'

function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para envontrar um herói para resolver isso.</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form action="">
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input type="text" placeholder="Valor em reais" />
                    <button type="submit" className="button">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewIncident;