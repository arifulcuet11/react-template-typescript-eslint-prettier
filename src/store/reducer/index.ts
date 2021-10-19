import { combineReducers } from 'redux';
import { TokenReducer } from './access-token';

const reducers = combineReducers({
    Token: TokenReducer,
});
export default reducers;
export type RootState = ReturnType<typeof reducers>;
