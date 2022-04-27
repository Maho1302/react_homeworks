import { useDispatch } from 'react-redux';

import { actionsDog } from '../redux';

export const Dog = ({ dog }) => {
    const dispatch = useDispatch();

    return (
        <div>
            {dog.name}
            <button onClick={() => dispatch(actionsDog.setDogForUpdate({ dog }))}>update</button>
            <button onClick={() => dispatch(actionsDog.deleteDog({ id: dog.id }))}>delete</button>
        </div>
    );
}