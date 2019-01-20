import * as types from './types';
import serviceFactory from '../api/factories';

const service = serviceFactory.create();

export const findCep = (cep) => {
    return (dispatch) => {
        return dispatch({
            type: types.FIND_CEP,
            payload: service.getDataFromCep(cep)
        })
    }
}