/** @format */

import { ERROR } from "@/consts/messages";
import { z } from "zod";

export const recipeCreateValidationSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: ERROR.TITLE_REQUIRED })
      .min(1, ERROR.TITLE_NON_EMPTY),
    instruction: z
      .string({ required_error: ERROR.INSTRUCTION_REQUIRED })
      .min(1, ERROR.INSTRUCTION_NON_EMPTY),
    ingredients: z.array(z.string()).default([]),
  }),
});
