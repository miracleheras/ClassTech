/** @format */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from "./core.entity";

@Entity({ name: "recipe" })
export class RecipeEntity extends CoreEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "text", nullable: true })
  instruction: string;

  @Column({ type: "text", array: true, default: [] })
  ingredients: string[];
}
