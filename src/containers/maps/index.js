import React, {Component} from 'react';
import Maps from './styles/maps';
import {connect} from 'react-redux';
import Streat from '../../components/streat';

class MapsComponent extends Component {

    render(){

        const {cep} = this.props;

        return(
            <Maps>
                <Streat {...cep}/>
            </Maps>
        )
    }
}

const mapStateToProps = ({cep}) => ({cep})

export default connect(mapStateToProps, null)(MapsComponent);