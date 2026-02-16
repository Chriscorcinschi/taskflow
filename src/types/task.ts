export type TaskStatus = "todo" | "in_progress" | "done";

export interface Task {
   id: string;
   title: string;
   status: TaskStatus;
}

export const taskStatusColors: Record<TaskStatus, string> = {
   todo: "red",
   in_progress: "yellow",
   done: "green",
};

export const taskStatusLabels: Record<TaskStatus, string> = {
   todo: "Todo",
   in_progress: "In Progress",
   done: "Done",
};

export const taskStatusOptions: TaskStatus[] = ["todo", "in_progress", "done"];
