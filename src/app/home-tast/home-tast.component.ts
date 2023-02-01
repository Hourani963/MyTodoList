import { Component,OnInit } from '@angular/core';
import {TaskService} from '../@shared/task.service'
import {Task} from "../@shared/models/task"

@Component({
  selector: 'app-home-tast',
  templateUrl: './home-tast.component.html',
  styleUrls: ['./home-tast.component.scss']
})
export class HomeTastComponent {
  title = 'MyTodoList';

  tasks : Task[] = [];

  constructor(private _taskService : TaskService){}

  ngOnInit(): void {
    this._taskService.getTasks().subscribe(
      (resp) => {
        this.tasks = resp
        console.log(this.tasks)
      }
    )
  }
}
