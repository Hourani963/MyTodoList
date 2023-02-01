import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Task} from "../@shared/models/task"
const TASK_API = "http://localhost:3000/tasks"

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(private _httpClient: HttpClient){}


  getTasks(){
    return this._httpClient.get<Task[]>(TASK_API)
  }

  postTask(task : Task){
    this._httpClient.post(TASK_API, {"name" : task}).subscribe(
      (res) => console.log(res)
    );
  }

  deleteTaskById(id : number){
    this._httpClient.delete(TASK_API+"/"+id).subscribe(
      (resp) => console.log("tache deleted")
    )
  }

  deleteAll(){

    this.getTasks().subscribe(
      tasks => {
        console.log(tasks)
        tasks.forEach((task) => this.deleteTaskById(task.id))
      }
    )
    //tasks.forEach((task) => this.deleteTaskById(task))
  }



}
