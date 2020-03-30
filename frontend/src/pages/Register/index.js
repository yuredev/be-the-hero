import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

function Register () {

    // a função use state retorna um array conteundo
    // no primeiro elemento a propriedado do estado 
    // e no segundo elemento uma função para mudar o estado 
    // assim usando a desestruturação de array...
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    // o useHistory recebe um objeto com métodos para redirecionar para outras urls
    const history = useHistory();

    async function handleRegister(evt) {
        evt.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
             // o axios já converte para JSON tirando a necessidade de converter
            const response = await api.post('http://localhost:3333/ongs', data);
            // response.data é o resultado da resposta 
            alert('Seu ID de acesso: ' + response.data.id);
            // redirecionando para a pagina de login novamente
            history.push('/');
        } catch (error) {
            console.log(error);
            alert('Erro no cadastro, tente novamente');
        }  
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name} 
                        onChange={evt => setName(evt.target.value)} 
                    />

                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email} 
                        onChange={evt => setEmail(evt.target.value)}
                    />

                    <input 
                        type="text" 
                        placeholder="WhatsApp" 
                        value={whatsapp} 
                        onChange={evt => setWhatsapp(evt.target.value)} 
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={evt => setCity(evt.target.value)}    
                        />

                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }} 
                            value={uf}
                            onChange={evt => setUf(evt.target.value)}    
                        />
                    </div>
                    <button type="submit" className="button">
                        Cadastrar
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Register;