export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  deadline?: string;
  status: TaskStatus;
}
