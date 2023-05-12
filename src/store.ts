import { createStore } from 'redux';
import rootReducer from './redux/reducers'

export default function configureStore() {
    const store = createStore(rootReducer);

    return store
}
