import { combineReducers } from 'redux';

import CarsRducers from './car';
import ActiveCarReducer from './car-active';

const allReducers = combineReducers({
    cars: CarsRducers,
    active: ActiveCarReducer
});

export default allReducers;