export type TaskStatus = "Todo" | "In-progress" | "Done";

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: "Low" | "Medium" | "High";
  deadline?: string;
  status: TaskStatus;
}
