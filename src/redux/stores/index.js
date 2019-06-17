import { createStore } from 'redux';
import reducer from '../reducers/recipient';

const store = createStore(reducer);

export default store;