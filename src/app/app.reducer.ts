import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTod from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';

import * as fromFiltroAction from './filter/filter.actions';

export interface AppState {
    todos: Todo[];
    filtro: fromFiltroAction.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTod.todoReducer,
    filtro: fromFiltro.filtroReducer
};
