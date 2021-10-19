import { ActionType } from '../action-types';

interface AddTokenAction {
    type: ActionType.ADD_TOKEN;
    payload: string;
}
interface DeleteTokenAction {
    type: ActionType.DELETE_TOKEN;
    payload: string;
}

export type Action = AddTokenAction | DeleteTokenAction;
