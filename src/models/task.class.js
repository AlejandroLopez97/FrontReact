import { Levels } from "./levels.enum";

export class Task {
    name = '';
    description = '';
    completed = false;
    level = Levels.NORMAL;


    constructor(name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}