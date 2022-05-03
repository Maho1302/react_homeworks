import {useDispatch} from "react-redux";

import {carActions} from "../../redux";
import {Link} from "react-router-dom";

const Car = ({car, car: {id, model, price, year}}) => {
    return (
        <div>
            {id} -- {model} -- {price} -- {year}
            <Link to={id.toString()}>
                <button>Information</button>
            </Link>
            {/*<button onClick={deleteById}>Delete</button>*/}
            {/*<button onClick={() =>dispatch(carActions.setCarForUpdate({id, car}))}>Update</button>*/}
        </div>
    );
};

export {Car};