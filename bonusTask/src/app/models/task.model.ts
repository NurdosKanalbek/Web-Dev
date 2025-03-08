export interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  deadline: Date; // Изменили тип на Date
}
