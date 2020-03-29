import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vindo, APAD</span>
                <Link to="/incidents/new" className="button">
                    Cadastrar novo caso
                </Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>
                        Caso teste
                    </p>
                    <strong>DESRIÇÃO:</strong>
                    <p>
                        Descrição teste
                    </p>
                    <strong>VALOR:</strong>
                    <p>
                        Valor teste
                    </p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3"></FiTrash2> 
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>
                        Caso teste
                    </p>
                    <strong>DESRIÇÃO:</strong>
                    <p>
                        Descrição teste
                    </p>
                    <strong>VALOR:</strong>
                    <p>
                        Valor teste
                    </p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3"></FiTrash2> 
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>
                        Caso teste
                    </p>
                    <strong>DESRIÇÃO:</strong>
                    <p>
                        Descrição teste
                    </p>
                    <strong>VALOR:</strong>
                    <p>
                        Valor teste
                    </p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3"></FiTrash2> 
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>
                        Caso teste
                    </p>
                    <strong>DESRIÇÃO:</strong>
                    <p>
                        Descrição teste
                    </p>
                    <strong>VALOR:</strong>
                    <p>
                        Valor teste
                    </p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3"></FiTrash2> 
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>
                        Caso teste
                    </p>
                    <strong>DESRIÇÃO:</strong>
                    <p>
                        Descrição teste
                    </p>
                    <strong>VALOR:</strong>
                    <p>
                        Valor teste
                    </p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3"></FiTrash2> 
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>
                        Caso teste
                    </p>
                    <strong>DESRIÇÃO:</strong>
                    <p>
                        Descrição teste
                    </p>
                    <strong>VALOR:</strong>
                    <p>
                        Valor teste
                    </p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3"></FiTrash2> 
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Profile;