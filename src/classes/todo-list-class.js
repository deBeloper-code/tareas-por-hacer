export class TodoList{
    constructor(){
        this.todos =[]; //Aquí voy a meter a todas mis tarea por hacer
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTarea(id){
        this.todos=this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();

    }
    marcarCompletado(id){
        for (const todo of this.todos) {
            
            if(todo.id == id){
                todo.completado = !todo.completado;
                break;
            }
        }

    }

    eliminarCompletados(){
        this.todos=this.todos.filter(todo => !todo.completado);

    }
    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify( this.todos));

    }
    cargarLocalStorage(){

    (localStorage.getItem('todo'))? this.todos = JSON.parse(localStorage.getItem('todo')): this.todos;    

        // if(localStorage.getItem('todo')){
        //     this.todos =JSON.parse( localStorage.getItem('todo'));
        //     console.log(this.todos);
        // }else{
        //     this.todos=[];

        // }

    }


}