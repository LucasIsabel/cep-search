import React from 'react';
import {Input} from './styles/input';

export default (props) => (
    <Input
        placeholder={"02050010"}
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={(event) => props.onHandleCep(event)}/>
)