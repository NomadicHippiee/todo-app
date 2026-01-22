class Project {
    constructor(name, todoArr = []){
        this.name = name;
        this.todoArr = todoArr;
        this.id = crypto.randomUUID(); 
    }
}

export default Project;