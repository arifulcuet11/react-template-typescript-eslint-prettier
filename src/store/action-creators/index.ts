import { Dispatch } from 'react';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const AddToken = (token: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_TOKEN,
            payload: token,
        });
    };
};
export const DeleteToken = (token: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETE_TOKEN,
            payload: token,
        });
    };
};
