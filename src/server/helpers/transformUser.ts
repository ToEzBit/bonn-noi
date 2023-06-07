import type { User } from "@clerk/nextjs/dist/types/server";

function transformUser(user: User) {
  return {
    id: user.id,
    name: user.username || user.firstName || "anonymous",
    profileImage: user.imageUrl,
  };
}

export default transformUser;
