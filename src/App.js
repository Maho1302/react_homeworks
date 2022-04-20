import {useReducer, useState} from 'react';
import './App.css';

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'addCat' :
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]}
        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)}

        case 'addDog' :
            return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]}
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)}

        default:
            console.error('Йой, що це таке?');
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    const [catValue, setCatValue] = useState('');
    const [dogValue, setDogValue] = useState('');

    const createCat = () => {
        dispatch({type: 'addCat', payload: catValue});
        setCatValue('');
    }
    const createDog = () => {
        dispatch({type: 'addDog', payload: dogValue});
        setDogValue('');
    }

    // const setter = (type, payload, setEmpty) => {
    //     dispatch({type, payload});
    //     setEmpty('');
    // }
    return (
        <div>
            <div className={'header'}>
                <div>
                    <label>Add cat: <input type="text" onChange={({target}) => setCatValue(target.value)}
                                            value={catValue}/></label>
                    <button onClick={createCat}>Save</button>
                    {/*<button onClick={() => setter('addCat', catValue, setCatValue())}>Save</button>*/}
                </div>
                <div>
                    <label>Add dog: <input type="text" onChange={({target}) => setDogValue(target.value)}
                                            value={dogValue}/></label>
                    <button onClick={createDog}>Save</button>
                    {/*<button onClick={() => setter('addDog', dogValue, setDogValue())}>Save</button>*/}
                </div>
            </div>
            <hr/>
            <div className={'header'}>
                <div>
                    {
                        state.cats.map(cat => (
                            <div key={cat.id}>
                                {cat.name}
                                <button onClick={() => dispatch({type: 'deleteCat', payload: cat.id})}>Delete</button>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {
                        state.dogs.map(dog => (
                            <div key={dog.id}>
                                {dog.name}
                                <button onClick={() => dispatch({type: 'deleteDog', payload: dog.id})}>Delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    );
}

export default App;
