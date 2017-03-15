import { combineReducers } from 'redux';
import RegistrationReducer from './RegistrationReducer';

export default combineReducers({
	auth: RegistrationReducer
});
