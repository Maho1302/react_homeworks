import {useEffect, useState} from 'react';

import {Car} from '../Car/Car';
import {carService} from '../../services';

const Cars = ({newCar, setCarForUpdate}) => {
    const [cars, setCars] = useState([]);
    const [deletedCarId, setDeletedCarId] = useState(null);
    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [newCar, deletedCarId])

    // useEffect(() => {
    //     if(newCar) {
    //         // setCars([...cars, newCar])  //React Hook useEffect has a missing dependency: 'cars'
    //         setCars(prevState => [...prevState, newCar])
    //     }
    //
    //     if (deletedCarId) {
    //         setCars(cars.filter(car => car.id !== deletedCarId))
    //     }
    // }, [newCar, deletedCarId])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setDeletedCarId={setDeletedCarId}/>)}
        </div>
    );
};

export {Cars};