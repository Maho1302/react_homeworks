// const Car = ({car:{id, model, price, year}}) => {
//     return (
//         <div>
//             <p><b>id:</b>{id}</p>
//             <p><b>model:</b>{model}</p>
//             <p><b>price:</b>{price}</p>
//             <p><b>year:</b>{year}</p>
//         </div>
//     );
// };
//
// export {Car};

import {Link} from "react-router-dom";

const Car = ({car, car: {id, model, price, year}}) => {
    return (
        <div>
            {id} -- {model} -- {price} -- {year}
            <Link to={id.toString()}>
                <button>Information</button>
            </Link>
        </div>
    );
};

export {Car};