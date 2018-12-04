import * as fronTodo from './todo.actions';
import { Todo } from './model/todo.model';
import { TOGGLE_TODO, EDITAR_TODO } from './todo.actions';
import { from } from 'rxjs';
import { mapToExpression } from '@angular/compiler/src/render3/view/util';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
const todo3 = new Todo('Pedir prestado el traje de Ironman');

todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer ( state = estadoInicial, action: fronTodo.acciones ): Todo[] {
    switch (action.type) {

        case fronTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            console.log(state);
            return [...state, todo];

        case fronTodo.TOGGLE_TODO:
            return state.map( todoEdit => {
                if (todoEdit.id === action.id ) {
                    return { // retorna objeto todo
                        ...todoEdit, // copia todos los elementos del objeto todo, menos los que son colocados explicitamente
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }
            });
        case fronTodo.TOGGLE_ALL_TODO:
            return state.map( todoEdit => {
                return {
                    ...todoEdit, // copia todos los elementos del objeto todo, menos los que son colocados explicitamente
                    completado: action.completado
                };
            });
        case fronTodo.EDITAR_TODO:
            return state.map( todoEdit => {
                // console.log(action);
                if (todoEdit.id === action.id ) {
                    return { // retorna objeto todo
                        ...todoEdit, // copia todos los elementos del objeto todo, menos los que son colocados explicitamente
                        texto: action.texto
                    };
                } else {
                    return todoEdit;
                }
            });
            case fronTodo.BORRAR_TODO:
                return state.filter( todoEdit => todoEdit.id !== action.id);
            case fronTodo.BORRAR_ALL_TODO:
                return state.filter( todoEdit => todoEdit.completado === false);
            default:
            return state;
    }
}
