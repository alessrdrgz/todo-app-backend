# React TODO App backend

# Environment variables

This project uses the following environment variables:

| Name            | Description                   | Default value      |
| --------------- | ----------------------------- | ------------------ |
| PORT            | Port on which the app listens | 5000               |
| SQLITE_DATABASE | SQLite database directory     | "data/database.db" |

All env variables can be modified by adding a `.env` file to the root of the project.

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) v16.4.2

# Getting started

- Clone the repository

```
git clone https://github.com/alessrdrgz/todo-app-backend.git
```

- Install dependencies

```
cd todo-app-backend
npm install
```

- Run the project

```
npm run dev
```

## Project structure

The folder structure of this app is explained below:

| Name                   | Description                                                              |
| ---------------------- | ------------------------------------------------------------------------ |
| **node_modules**       | Contains all npm dependencies                                            |
| **src/config**         | Contains configurations env variables configuration files and the logger |
| **src/controller**     | Contains all classes that define the endpoints logic                     |
| **src/data**           | Contains the SQLite database                                             |
| **src/entity**         | Contains all SQLite database entitites                                   |
| **src/data-source.ts** | SQLite database connection                                               |
| **src/routes.ts**      | Contain all express routes                                               |
| **src/index.ts**       | Entry point to express app                                               |
