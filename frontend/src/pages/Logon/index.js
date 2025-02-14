import React, {useState} from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api';

function Logon() {

    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(evt) {
        evt.preventDefault();
        try {
            const response = await api.post('sessions', { id });

            // setando variaveis no navegador
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('profile');
        } catch (error) {
            alert('Não foi possível realizar o login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua id"
                        value={id}
                        onChange={evt => setId(evt.target.value)}    
                    />
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