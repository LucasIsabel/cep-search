import React, {Component} from 'react';
import Maps from './styles/maps';
import {connect} from 'react-redux';
import Streat from '../../components/streat';
import GoogleMaps from '../../components/map';
import PropTypes from "prop-types";

class MapsComponent extends Component {

    render(){

        const {cep} = this.props;

        return(
            <Maps>
                <Streat {...cep}/>
                <GoogleMaps />
            </Maps>
        )
    }
}

const mapStateToProps = ({cep}) => ({cep})

MapsComponent.propTypes = {
  cep: PropTypes.object.isRequired
}

export default connect(mapStateToProps, null)(MapsComponent);