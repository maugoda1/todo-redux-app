import { Action } from '@ngrx/store';


export const SET_FILTRO = '[Filter] Set Filter';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export class SetFilterAction implements Action {
    readonly type = SET_FILTRO;

    constructor( public filter: filtrosValidos ) {}

}

export type acciones = SetFilterAction;
