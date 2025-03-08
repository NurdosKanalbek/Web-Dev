import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-item',
  standalone: true,
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  imports: [CommonModule, RouterModule],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() markComplete = new EventEmitter<number>();
  @Output() markIncomplete = new EventEmitter<number>();
}
