import React, { useState, useEffect } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../services/api';

function Profile() {

    const [incidents, setIncidents] = useState([]);
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    // a função useEffect serve para definir uma callback para toda 
    // vez que um valor for mudado ela ser executada, semelhante aos watchers do Vue
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        });
    }, [ongId]);

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    async function handleDeleteIncident(id) {
        try {
            await api.delete('incidents/' + id, {
                headers: {
                    Authorization: ongId
                }
            });
            setIncidents(incidents.filter(el => el.id !== id));
        } catch (error) {
            alert('Erro ao deletar o caso, tente novamente.');
        }
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vindo, {localStorage.getItem('ongName')}</span>
                <Link to="/incidents/new" className="button">
                    Cadastrar novo caso
                </Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO: </strong>
                        <p>
                            {incident.title}
                        </p>
                        <strong>DESRIÇÃO:</strong>
                        <p>
                            {incident.description}
                        </p>
                        <strong>VALOR:</strong>
                        <p>
                            {Intl.NumberFormat('pt-BR', { 
                                style: 'currency', 
                                currency: 'BRL' 
                            }).format(incident.value)}
                        </p>
                        <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                            <FiTrash2 size={20} color="#A8A8B3"></FiTrash2> 
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Profile;