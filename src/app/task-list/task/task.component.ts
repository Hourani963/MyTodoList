import {Component,Input, Inject,EventEmitter, Output} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TaskService} from '../../@shared/task.service'
import {Task} from '../../@shared/models/task'


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  
  @Input() public task!:Task;
  @Output() public deletItemEvent = new EventEmitter<number>();

  constructor(public dialog: MatDialog, private _taskService : TaskService){}

  openDialog(): void {
    console.log(this.task)
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {task: this.task},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.task = result;
    });
  }

  editTask(index:number){
    console.log(index)
    this.openDialog();
  }

  deleteTask(id : number){
    this._taskService.deleteTaskById(id)
    this.deletItemEvent.emit(1);

  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialogue.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

