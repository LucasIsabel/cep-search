import React from 'react';
import {Button} from './styles/button';

export default (props) => (
    <Button onClick={props.findCep} {...props}> {props.name} </Button>
)