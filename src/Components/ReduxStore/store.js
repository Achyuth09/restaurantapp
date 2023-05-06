import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";
import authReducer from "../storeLogin/reducerLogin";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const rootReducers = combineReducers({
    login: authReducer,
})

export const store = legacy_createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
)