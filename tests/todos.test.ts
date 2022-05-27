import { app, server as sv } from "../src/index";
import * as supertest from "supertest";
import { Server } from "http";

const api = supertest(app);

describe("TODO endpoints tests", () => {
  const id = Math.floor(Math.random() * 20000 + 99999);
  test("Try to create a TODO without name", async () => {
    const todo = {
      description: "Doing tests with jest",
    };

    await api.post("/todo").send(todo).expect(400);
  });

  test("Create a TODO", async () => {
    const todo = {
      idTodo: id,
      name: "Jest tests",
      description: "Doing tests with jest",
      tag: "test",
    };

    await api
      .post("/todo")
      .send(todo)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Get TODO by ID", async () => {
    await api
      .get(`/todo/${id}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Update TODO", async () => {
    await api.patch(`/todo/${id}`).send({ completed: true }).expect(200);
  });

  test("Search TODO", async () => {
    const r = await api.post(`/todos`).send({ idTodo: id });
    expect(r.status).toBe(200);
  });

  test("Delete TODO", async () => {
    await api.delete(`/todo/${id}`).expect(200);
  });

  afterAll(async () => {
    const server = (await sv) as Server;
    server.close();
  });
});
