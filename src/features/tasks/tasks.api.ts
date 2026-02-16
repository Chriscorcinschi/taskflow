import type { Task } from "../../types/task";

let tasks: Task[] = [
   { id: "1", title: "Setup progetto", status: "done" },
   { id: "2", title: "Login", status: "done" },
   { id: "3", title: "CRUD Tasks", status: "todo" },
];

export const getTasks = async (): Promise<Task[]> => {
   await new Promise((r) => setTimeout(r, 600));
   return [...tasks];
};

export const createTask = async (title: string): Promise<Task> => {
   console.log("API: createTask called with title:", title);

   await new Promise((r) => setTimeout(r, 600));
   const newTask = {
      id: Date.now().toString(),
      title,
      status: "todo" as const,
   };
   tasks.push(newTask);
   return newTask;
};

export const updateTaskStatus = async (
   id: string,
   status: Task["status"],
): Promise<Task> => {
   await new Promise((r) => setTimeout(r, 400));
   const task = tasks.find((t) => t.id === id);
   if (!task) throw new Error("Task not found");
   task.status = status;
   return task;
};

export const deleteTask = async (id: string): Promise<void> => {
   await new Promise((r) => setTimeout(r, 400));
   tasks = tasks.filter((t) => t.id !== id);
};
