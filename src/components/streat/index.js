import React from 'react';
import {Streat} from './styles/streat';

export default ({ logradouro, bairro, localidade, uf, cep }) => (
    <Streat>
        <h1> {logradouro} </h1>
        <p> {bairro} </p>
        <p> {`${localidade} - ${uf}`}</p>
        <p> {cep} </p>
    </Streat>
)