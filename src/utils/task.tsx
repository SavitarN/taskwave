import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
const task = useSelector((state: RootState) => state.task);

localStorage.setItem("taskData", JSON.stringify(task));
