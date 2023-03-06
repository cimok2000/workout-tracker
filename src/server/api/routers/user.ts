import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.string())
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: {
          id: input,
        },
      });
    }),

  getWorkouts: protectedProcedure
    .query(({ ctx }) => {
      return ctx.prisma.workout.findMany({
        where: {
          userId: ctx.session.user.id,
        },
      });
    }),

  createWorkout: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        exercises: z.array(
          z.object({
            name: z.string(),
            description: z.string(),
            sets: z.number(),
            reps: z.number(),
            weight: z.number(),
          }),
        ),
        date: z.date(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.workout.create({
        data: {
          name: input.name,
          description: input.description,
          exercises: {
            create: input.exercises,
          },
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
          date: input.date,
        },
      });
    }),

  removeWorkout: protectedProcedure
    .input(z.string())
    .mutation(({ ctx, input }) => {
      return ctx.prisma.workout.delete({
        where: {
          id: input,
        },
      });
    })

});
