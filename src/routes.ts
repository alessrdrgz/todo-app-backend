import TodoController from "./controller/TodoController";

export const Routes = [
  {
    method: "post",
    route: "/todo",
    controller: TodoController,
    action: "create",
  },
  {
    method: "get",
    route: "/todo",
    controller: TodoController,
    action: "get",
  },
];
