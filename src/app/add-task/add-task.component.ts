import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {TaskService} from '../@shared/task.service'


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  taskControl = new FormControl();
 
  @Output() public newItemEvent = new EventEmitter<number>();

  constructor( private _taskService : TaskService){}

  submitTask() { 
    console.log(this.taskControl.value)
    if(this.taskControl.value != null){
      this._taskService.postTask(this.taskControl.value)
      //this.newItemEvent.emit(1);
    }
      
  }
}
