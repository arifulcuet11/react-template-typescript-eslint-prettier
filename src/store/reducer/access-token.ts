import { ActionType } from '../action-types';
import { Action } from '../actions';

export interface TokenState {
    token: string;
}
const initialState = {
    token: 'Ariful Islam',
};

export const TokenReducer = (
    state: TokenState = initialState,
    action: Action
) => {
    switch (action.type) {
        case ActionType.ADD_TOKEN:
            return { token: action.payload };
        case ActionType.DELETE_TOKEN:
            return { token: '' };
        default:
            return state;
    }
};
