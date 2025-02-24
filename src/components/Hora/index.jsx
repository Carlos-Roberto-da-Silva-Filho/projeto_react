import React, { useState } from 'react'
import styled from 'styled-components'
import Timer from '../Timer'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-top: 2rem;
    background: #05315E; /
    color: white;
`;

const Title = styled.h1`
    font-size: 3rem;
    color: white;
    margin-bottom: 1rem;
`;

const Botao = styled.button`
    background-color: white;
    color: #05315E;
    border: none;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 1rem;
    margin-bottom: 8rem;

    &:hover {
        background-color:rgb(174, 231, 255);
        font-weight: bold;
    }
`;

const Hora = () => {
    const [isRunning, setIsRunning] = useState(true);

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    return (
        <Container>
            <Title>Hora</Title>
            O horário atual é {new Date().toLocaleTimeString()}
            <Timer isRunning={isRunning} />
            <Botao onClick={toggleTimer}>{isRunning ? 'Parar' : 'Iniciar'}</Botao>
        </Container>
    );
};

export default Hora
