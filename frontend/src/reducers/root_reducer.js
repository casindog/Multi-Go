import { combineReducers } from 'redux';
// import sessionReducer from './session_reducer';
// import entitiesReducer from './entities';
// import errorsReducer from './errors'
import uiReducer from './ui_reducer.js'

export default combineReducers({
    // entities: entitiesReducer,
    // session: sessionReducer,
    // errors: errorsReducer,
    ui: uiReducer
});