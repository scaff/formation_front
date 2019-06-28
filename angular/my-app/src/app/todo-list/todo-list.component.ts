import { Component } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  taskList = [{
    title: 'Mon titre',
    isDone: true
  }]
  currentTask = {
    id: '',
    title: '',
    description: 'a',
  }
  currentAction = 'add'

  constructor () {
    console.log(this)
  }

  handleTaskReception (task) {
    switch(this.currentAction) {
      case 'add':
        console.log('yeata')
        this.taskList.push(task)
        break;
    }
  }
}
