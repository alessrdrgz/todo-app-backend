import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Todo } from "../entity/Todo";

export default class TodoController {
  public TodoRepository = AppDataSource.manager.getRepository(Todo);

  public async create(req: Request, res: Response) {
    const todo = await this.TodoRepository.create({
      ...req.body,
      date: new Date(),
    });

    this.TodoRepository.save(todo)
      .then((r) => res.send(r))
      .catch((e) => res.status(400).send(e.message));
  }
}
