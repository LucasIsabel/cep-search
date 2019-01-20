import React from 'react';
import {Input} from './styles/input';

export default (props) => (
    <Input
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={(event) => props.onHandleCep(event)}/>
)