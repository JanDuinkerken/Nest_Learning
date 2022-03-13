import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    getTasksWithFilters(filterDto: GetTaskFilterDto): Task[];
    createTask(createTaskDto: CreateTaskDto): Task;
    updateTaskStatus(id: string, status: TaskStatus): Task;
    deleteTask(id: string): void;
}
