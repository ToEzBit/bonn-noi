import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  privateProcedure,
} from "~/server/api/trpc";

import { clerkClient } from "@clerk/nextjs";
import map from "lodash/map";
import find from "lodash/find";

import transformUser from "~/server/helpers/transformUser";
import { rateLimit } from "~/server/utils/rateLimit";

import { TRPCError } from "@trpc/server";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      orderBy: [{ createdAt: "desc" }],
      take: 100,
    });

    const userIds = map(posts, (post) => post.authorId);

    const clerkUsers = await clerkClient.users.getUserList({ userId: userIds });

    const users = map(clerkUsers, transformUser);

    return map(posts, (post) => ({
      post,
      author: find(users, (user) => user.id === post.authorId) || {
        id: "",
        name: "anonymous",
        profileImage: "",
      },
    }));
  }),
  create: privateProcedure
    .input(
      z.object({
        content: z
          .string()
          .trim()
          .min(1, "only white space not required")
          .max(256),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const authorId = ctx.userId;

      const { success } = await rateLimit.limit(authorId);

      if (!success) {
        throw new TRPCError({ code: "TOO_MANY_REQUESTS" });
      }

      return ctx.prisma.post.create({
        data: {
          authorId,
          content: input.content,
        },
      });
    }),
});
