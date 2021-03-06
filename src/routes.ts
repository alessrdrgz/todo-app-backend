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
  {
    method: "get",
    route: "/todo/:id",
    controller: TodoController,
    action: "getById",
  },
  {
    method: "patch",
    route: "/todo/:id",
    controller: TodoController,
    action: "update",
  },
  {
    method: "post",
    route: "/todos",
    controller: TodoController,
    action: "search",
  },
  {
    method: "delete",
    route: "/todo/:id",
    controller: TodoController,
    action: "delete",
  },
];
