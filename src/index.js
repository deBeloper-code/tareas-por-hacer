import './styles.css';
import {Todo, TodoList, crearTodoHtml} from './classes/index-clases-export';


export const todoList = new TodoList();//instancia de la clase con los métodos
// const tarea = new Todo('Aprender Python');//Mi nueva tarea
// todoList.nuevoTodo(tarea);// mando a llamar mi método y le agrego mi tarea para que lo agregue 
//                          // a los arrays que tengo en el constructor de la clase TodoList
                         
                         
// crearTodoHtml(tarea);//agrego mi tarea al Html con está función 

// Trabajar con localStorage


// setTimeout(()=>{
//     localStorage.clear('mykey');
// },1500);

todoList.todos.forEach(todo => crearTodoHtml(todo)); 

