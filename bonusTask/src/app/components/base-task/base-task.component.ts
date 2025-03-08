import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-base-task',
  template: '',
})
export class BaseTaskComponent {
  @Input() task!: Task;
}
