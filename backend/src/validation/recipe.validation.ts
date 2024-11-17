/** @format */

import { ERROR } from "@/consts/messages";
import { z } from "zod";

const uuidRegex =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;

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

export const recipeUpdateValidationSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: ERROR.TITLE_REQUIRED })
      .min(1, ERROR.TITLE_NON_EMPTY)
      .optional(),
    instruction: z
      .string({ required_error: ERROR.INSTRUCTION_REQUIRED })
      .min(1, ERROR.INSTRUCTION_NON_EMPTY)
      .optional(),
    ingredients: z.array(z.string()).default([]).optional(),
  }),
});

export const recipeIDValidationSchema = z.object({
  params: z.object({
    id: z.string().refine((value) => uuidRegex.test(value), {
      message: ERROR.UUID_TYPE,
    }),
  }),
});
