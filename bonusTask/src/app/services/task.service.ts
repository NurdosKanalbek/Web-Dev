import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Buy groceries',
      description: 'Milk, Bread, Cheese',
      category: 'Personal',
      status: 'Pending',
      deadline: new Date(),
    },
    {
      id: 2,
      title: 'Finish project',
      description: 'Complete Angular app',
      category: 'Work',
      status: 'Pending',
      deadline: new Date(),
    },
  ];

  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);
  tasks$ = this.tasksSubject.asObservable();

  getTaskById(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  updateTaskStatus(id: number, status: 'Pending' | 'Completed') {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, status } : task
    );
    this.tasksSubject.next(this.tasks);
  }
}
