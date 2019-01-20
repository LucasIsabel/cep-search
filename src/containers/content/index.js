import React,{Component} from 'react';
import { Content } from './styles/main';
import BoxCep from '../../containers/cep';
import Maps from '../../containers/maps';

class Cotent extends Component {

    render() {
        return (
            <Content>
                <BoxCep />
                <Maps />
            </Content>
        );
    }
};

export default Cotent;