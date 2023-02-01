import {Component,Input, Inject,EventEmitter, Output} from '@angular/core';
import {Task} from "../@shared/models/task"
import {TaskService} from '../@shared/task.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {


  @Input() public parentTasks!:Task[];

  constructor(private _taskService : TaskService){}

  effacerTous(){
    this._taskService.deleteAll();
  }

  
}



