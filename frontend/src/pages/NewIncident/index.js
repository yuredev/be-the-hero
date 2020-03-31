import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css'

function NewIncident() {

    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState(''); 

    async function handleIncident(evt) {
        evt.preventDefault();
        const data = { title, description, value }
        const ongId = localStorage.getItem('ongId');

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });
            alert('Caso cadastrado com sucesso!');
            history.push('/profile');
        } catch (error) {
            alert('Não foi possível realizar o cadastro');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleIncident}>
                    <input 
                        placeholder="Título do caso" 
                        value={title}
                        onChange={evt => setTitle(evt.target.value)}    
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={evt => setDescription(evt.target.value)}    
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value} 
                        onChange={evt => setValue(evt.target.value)}
                    />
                    <button type="submit" className="button">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewIncident;