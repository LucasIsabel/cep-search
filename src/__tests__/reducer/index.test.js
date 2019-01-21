import reducer from '../../store/reducers/cep';
import * as types from '../../actions/types';
import {address} from '../../helpers/fixtures/objects';
describe('Cep Reducer', () => {

    let state;

    beforeAll(() => {
        state = {
            cep: null,
            logradouro: null,
            complemento: null,
            bairro: null,
            localidade: null,
            uf: null,
            unidade: null,
            ibge: null,
            gia: null,
            error: false
        }
    })

    it('it should return reducer with state changed', () => {
        const redux = reducer(state, {
            type: `${types.FIND_CEP}_FULFILLED`,
            payload: address
        })

        expect(redux.cep).toEqual(address.cep);
        expect(redux.logradouro).toEqual(address.logradouro);
        expect(redux.bairro).toEqual(address.bairro);
        expect(redux.uf).toEqual(address.uf);
    });

    it('it should return error with true value', () => {
        const redux = reducer(state, {
            type: `${types.FIND_CEP}_REJECTED`,
        })

        expect(redux.error).toBeTruthy();
    })

});