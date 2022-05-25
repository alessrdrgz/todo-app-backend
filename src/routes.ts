import TodoController from "./controller/TodoController";

export const Routes = [
  {
    method: "post",
    route: "/todo",
    controller: TodoController,
    action: "create",
  },
];
