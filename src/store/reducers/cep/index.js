import * as types from '../../../actions/types';

const iniitalState = {
    "cep": null,
    "logradouro": null,
    "complemento": null,
    "bairro": null,
    "localidade": null,
    "uf": null,
    "unidade": null,
    "ibge": null,
    "gia": null
}

export default (state = iniitalState, action) => {
    const { type, payload } = action;

    switch (type) {
        case `${types.FIND_CEP}_FULFILLED`: {
            return {
                ...state,
                "cep": payload.cep,
                "logradouro": payload.logradouro,
                "complemento": payload.complemento,
                "bairro": payload.bairro,
                "localidade": payload.localidade,
                "uf": payload.uf,
                "unidade": payload.unidade,
                "ibge": payload.ibge,
                "gia": payload.gia
            }
        }
        default: {
            return state;
        }
    }
}