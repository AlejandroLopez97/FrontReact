import React from 'react'
import { Task } from '../../models/task.class'
import { Levels } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

function TaskListComponent() {

    const defaultTask = new Task('Example', 'Default description', false, Levels.URGENT);

    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea');
    }

  return (
    <div>
        <div>
            <h1>Your Tasks: </h1>
        </div>
        {/* TODO: Aplicar un for/map para renderizar una lista de tareas */}
        <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}

export default TaskListComponent
