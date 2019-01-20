import React,{Component} from 'react';
import { CepBox } from './styles/box-cep';
import Button from '../../components/form/button';
import Input from '../../components/form/input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions/searchActions';

class CepComponent extends Component {

    state = {
        cep: ''
    }

    onHandleCep = (event) => {
      this.setState({[event.target.name]: [event.target.value]})
    }

    render() {
        return (
            <CepBox>
                <p> Consultar </p>
                <aside>
                <p>CEP</p>
                <Input type={"number"} value={this.state.cep} name={"cep"} onHandleCep={this.onHandleCep}/>
                <Button primary name={"Buscar"} onClick={() => this.props.actions.findCep(this.state.cep)}/>
                </aside>
            </CepBox>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
     ...searchActions
    }, dispatch)
})

export default connect(null, mapDispatchToProps)(CepComponent);