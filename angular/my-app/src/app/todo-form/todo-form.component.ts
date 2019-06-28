import { Component, Output, Input, EventEmitter } from '@angular/core';


interface TaskInterface {
  id: string;
  title: string;
  decsription: string;
}

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  // styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Input() task: TaskInterface;
  @Input() action: string;
  @Output() taskSent = new EventEmitter();

  get buttonName () {
    switch(this.action) {
      case 'add':
        return 'Ajouter'
      break
      case 'edit':
        return 'Editer'
        break
      default:
        break
    }
  }

  submitted = false;
 
  onSubmit() { this.submitted = true; }

  sendTaskToParent ($event) {
    $event.preventDefault()
    this.taskSent.emit(this.task)
  }
}
