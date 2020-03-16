class TodoList {
    constructor() {
        this.todos = [];
    }

    static addTodo() {
        this.todos.push('New all');
        console.log(this.todos);
    }
}

TodoList.addTodo();
TodoList.addTodo();
TodoList.addTodo();
TodoList.addTodo();