import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

export default createStore(reducers, {}, compose(applyMiddleware(thunk)));
