var app = new Vue({

    // elemento con el cual se va a ligar vue.js
    //# es un id
    el: '#app',
    //informacion que se va a manipular desde vue
    //todas las propiedades que se van a actualizar "automaticamente"
    data: {
        name: 'Vue', // propiedad, vue puede ser cambiado por lo que quiera

        todos: [
            {
                value: 'TODO #1',
                editMode: false
            },
            {
                value: 'TODO #2',
                editMode: false
            },
            {
                value: 'TODO #3',
                editMode: false
            }
        ],
        todo: ''
    },
    //funciones de vue
    methods: {
        addItem() {
            //agregar item a arreglo
            this.todos.push({
                value: this.todo,
                editMode: false
            });
            //"borrar" valor del input despues de agregar input
            this.todo = '';
        },
        deleteItem(index) {
            //"borrar" elemento en la posicion  index 
            this.todos.splice(index, 1);
        },
        editItem(index) {
            //marcar como que se esta "editando" (pasar a modo edicion)
            this.todos[index].editMode = true;
        },
        saveItem(index) {
            this.todos[index].editMode = false;
        }
    }
});