class List {
    constructor() {
        this.data = []
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor() {
        super();
        this.user = "ricardo";
    }
    showUser(){
        console.log(this.user);
    }
}

var MinhaLista = new TodoList();

