import { Component, OnInit } from '@angular/core';

import * as fromFiltro from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos;
  pendientes: number;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro( filtro: fromFiltro.filtrosValidos ) {
    const accion = new fromFiltro.SetFilterAction(filtro);
    this.store.dispatch(accion);
  }

  contarPendientes( todos: Todo[] ) {
    this.pendientes = todos.filter( todo => !todo.completado ).length;
    console.log(this.pendientes);
  }

  borrarCompletados() {
    const accion = new fromTodo.BorrarAllTodoAction();
    this.store.dispatch(accion);
  }
}
