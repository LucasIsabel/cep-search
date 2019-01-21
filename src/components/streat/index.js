import React from 'react';
import {Streat} from './styles/streat';

export default ({ logradouro, bairro, localidade, uf, cep, error }) => (
    <Streat>
        {
          error ?
            <span>
                Nenhum endereço encontrado verifique se os dados estão corretos
            </span> :
          <div>
            <h1> {logradouro} </h1>
            <p> {bairro} </p>
            <p> {localidade && `${localidade} - ${uf}`}</p>
            <p> {cep} </p>
          </div>
        }
    </Streat>
)