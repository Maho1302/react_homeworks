import {useEffect, useState} from 'react';

import {Car} from '../Car/Car';
import {carService} from '../../services';

const Cars = ({newCar, setCarForUpdate, updatedCar}) => {
    const [cars, setCars] = useState([]);
    const [deletedCarId, setDeletedCarId] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    useEffect(() => {
        if(newCar) {
            // setCars([...cars, newCar])  //React Hook useEffect has a missing dependency: 'cars'
            setCars(prevState => [...prevState, newCar])
        }

        if (deletedCarId) {
            setCars(cars.filter(car => car.id !== deletedCarId))
        }
    }, [newCar, deletedCarId])

    useEffect( () => {
        if (updatedCar) {
           const car = cars.find(car => car.id === updatedCar.id);
           Object.assign(car, updatedCar)
           setCars([...cars])
        }
    }, [updatedCar])
// другий варіант більш оптимізований, він не робить завантаження, тобто не нагружає сервер. Але якщо багато людей працює з базою данних краще все ж робити завантаження
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setDeletedCarId={setDeletedCarId}/>)}
        </div>
    );
};

export {Cars};