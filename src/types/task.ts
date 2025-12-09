export type TaskStatus = "Todo" | "In-progress" | "Done";

export interface Task {
  title: string;
  description?: string;
  priority: "Low" | "Medium" | "High";
  deadline?: string;
  status: TaskStatus;
}
