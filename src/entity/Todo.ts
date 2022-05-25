import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("todo")
export class Todo {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_todo" })
  idTodo: number | null;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("date", { name: "date" })
  date: Date;

  @Column("text", { name: "tag", nullable: true })
  tag: string | null;

  @Column("boolean", { name: "completed", default: () => "0" })
  completed: boolean;
}
