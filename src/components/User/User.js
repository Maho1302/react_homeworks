import React from 'react';
import {Button} from '../Button/Button';

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            {id} {name} <Button state={user} to={id.toString()}>Show details</Button>
        </div>
    );
};

export {User};