import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

import { clerkClient } from "@clerk/nextjs";

export const userRouter = createTRPCRouter({
  get: privateProcedure.query(async ({ ctx }) => {
    const user = await clerkClient.users.getUser(ctx.userId);
    return { ...user };
  }),
});
