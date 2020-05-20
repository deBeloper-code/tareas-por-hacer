


// Referencias Html

import { Todo } from "../classes/todo.class";
import {todoList} from "../index"

const divTodoList       = document.querySelector('.todo-list');
const inputTxt          = document.querySelector('.new-todo');
const btnBorrar         = document.querySelector('.clear-completed');
const filters           = document.querySelector('.filters');
const anchorfilters     = document.querySelectorAll('.selected')   ;
const conteo            = document.querySelector('.count');    

export const crearTodoHtml =(todo)=>{

    const htmlTodo =`
    <li class="${(todo.completado)? 'completed': ''}" data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${(todo.completado)? 'checked': ''}>
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>
    
    `;
    const div = document.createElement('div');
    div.innerHTML= htmlTodo;
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;


}
inputTxt.addEventListener('keyup', (event)=>{

    if(event.keyCode == 13 && inputTxt.value.length >0){
        const nuevoTodo = new Todo(inputTxt.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        inputTxt.value ='';
        // console.log(todoList);
    }
});

divTodoList.addEventListener('click', (event)=>{
     const nombreElemento= event.target.localName;
     const todoElemento  = event.target.parentElement.parentElement;
     const todoId        = todoElemento.getAttribute('data-id');
     
    if(nombreElemento.includes('input')){
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
               
        
        
    }else if (nombreElemento.includes('button')){
        todoList.eliminarTarea(todoId);
        divTodoList.removeChild(todoElemento);
        
    }
   

    });

  btnBorrar.addEventListener('click', ()=>{
        todoList.eliminarCompletados();

        for(let i = divTodoList.children.length -1; i>=0; i--){
            const elemento = divTodoList.children[i];
            if(elemento.classList.contains('completed')){
                divTodoList.removeChild(elemento);
                localStorage.clear();
            }
            console.log(elemento);
        }

  });

filters.addEventListener('click', (event)=>{
    console.log(event.target.text);

    const filtro = event.target.text;
    if(!filtro) return;

    anchorfilters.forEach(elem=> elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const elemento of divTodoList.children){
        
        elemento.classList.remove('hidden');
        const completada = elemento.classList.contains('completed');
        switch(filtro){

            case 'Pendientes':
                if(completada){
                    elemento.classList.add('hidden');
                }
            break;    
            case 'Completados':
                if(!completada){
                    elemento.classList.add('hidden');
                }
            break;    

        }
        
    }
    
    
})