import {FC} from 'react';
import {IUser} from '../../interfaces';

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user:{id,email,username,name}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <hr/>
        </div>
    );
};

export {User};