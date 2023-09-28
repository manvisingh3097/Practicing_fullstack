import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/index";
import thunk from 'redux-thunk'

const store = createStore(rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_();
    applyMiddleware(thunk));

export default store;