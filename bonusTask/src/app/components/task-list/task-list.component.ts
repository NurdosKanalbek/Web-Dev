import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [CommonModule, TaskItemComponent],
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.taskService.tasks$.subscribe((tasks) => (this.tasks = tasks));
  }

  onCompleteTask(id: number) {
    this.taskService.updateTaskStatus(id, 'Completed');
  }

  onIncompleteTask(id: number) {
    this.taskService.updateTaskStatus(id, 'Pending');
  }
}
