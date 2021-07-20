import {Action} from '@ngrx/store';

export interface appState {
    mensaje : any[]
}

export const initialState = {
    mensaje : []
}

export function reducer(state = initialState, action:Action){
    console.log(action);
}