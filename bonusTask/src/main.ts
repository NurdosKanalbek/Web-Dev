import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { TaskListComponent } from './app/components/task-list/task-list.component';

bootstrapApplication(TaskListComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
