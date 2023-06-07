import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

const AvatarDemo = ({ image, alt }: { image: string; alt: string | null }) => (
  <Avatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
    <Avatar.Image
      className="h-full w-full rounded-[inherit] object-cover"
      src={image}
      alt={alt ? alt : "profile"}
    />
    <Avatar.Fallback
      className=" leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] "
      delayMs={600}
    >
      CT
    </Avatar.Fallback>
  </Avatar.Root>
);

export default AvatarDemo;
