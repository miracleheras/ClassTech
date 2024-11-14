/** @format */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "recipe" })
export class RecipeEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "text", nullable: true })
  instruction: string;

  @Column({ type: "text", array: true, default: [] })
  ingredients: string[];
}
