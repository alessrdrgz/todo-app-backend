import { Request, Response } from "express";
import { logger } from "../config/LoggerConfig";
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

  public get(req: Request, res: Response) {
    this.TodoRepository.find()
      .then((r) => res.send(r))
      .catch((e) => res.status(400).send(e.message));
  }

  public getById(req: Request, res: Response) {
    const { id } = req.params;
    if (Number.isInteger(+id)) {
      this.TodoRepository.findOneBy({ idTodo: +id })
        .then((r) => res.send(r))
        .catch((e) => res.status(400).send(e.message));
    } else res.status(400).send(`ID must be an integer`);
  }

  public update(req: Request, res: Response) {
    const { id } = req.params;
    if (Number.isInteger(+id)) {
      this.TodoRepository.update(id, { ...req.body })
        .then((r) => res.send(r))
        .catch((e) => res.status(400).send(e.message));
    } else res.status(400).send(`ID must be an integer`);
  }

  public search(req: Request, res: Response) {
    this.TodoRepository.find({ where: { ...req.body } })
      .then((r) => res.send(r))
      .catch((e) => res.status(400).send(e.message));
  }

  public delete(req: Request, res: Response) {
    const { id } = req.params;
    if (Number.isInteger(+id)) {
      this.TodoRepository.delete(id)
        .then((r) => res.send(r))
        .catch((e) => res.status(400).send(e.message));
    } else res.status(400).send(`ID must be an integer`);
  }
}
