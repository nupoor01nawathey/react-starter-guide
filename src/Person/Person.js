import React from 'react';
import './Person.css';


const person = ( props ) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
        </div>
    );
};

export default person;