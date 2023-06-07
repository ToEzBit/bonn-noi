import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import {
  ChatBubbleBottomCenterIcon,
  RocketLaunchIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { api } from "~/utils/api";
import { useRef, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import isEmpty from "lodash/isEmpty";

import Avatar from "~/components/ui/Avatar";

function CreatePost() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const { isSignedIn } = useAuth();

  const { data: user, isLoading } = api.user.get.useQuery(undefined, {
    enabled: isSignedIn,
  });

  const contentRef = useRef<HTMLTextAreaElement>(null);

  const ctx = api.useContext();

  const { mutate, isLoading: isMutateLoading } = api.post.create.useMutation({
    onSuccess: () => {
      void ctx.post.getAll.invalidate();
      setIsDialogOpen(false);
    },
    onError: (err) => {
      // TODO: create and use toast instead alert
      // labels: good first issue
      const errorMessage = err.data?.zodError?.fieldErrors.content;
      if (errorMessage) {
        alert(errorMessage[0]);
      } else {
        alert(err.message);
      }
    },
  });

  function handleSubmit() {
    const enteredContent = contentRef.current?.value;
    if (!enteredContent) return;
    mutate({
      content: enteredContent,
    });
  }

  if (isLoading) {
    return null;
  }

  if (isEmpty(user)) {
    return null;
  }

  return (
    <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <Dialog.Trigger asChild>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <ChatBubbleBottomCenterIcon className="h-6 w-6  cursor-pointer text-cyan-500 " />
        </motion.div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9  fixed inset-0 bg-slate-900 bg-opacity-25 " />
        <motion.div
          className="fixed left-[50%] top-[50%]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-700 p-[25px] focus:outline-none">
            <Dialog.Description className="text-mauve11 mb-5 mt-[10px] flex gap-4 text-[15px] leading-normal ">
              <Avatar image={user.imageUrl} alt={user.firstName} />
              <label className=" bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-2xl font-bold tracking-wide text-transparent transition  delay-150 duration-300 ease-out">
                {user.firstName} {user.lastName}
              </label>
            </Dialog.Description>
            <fieldset className="mb-[15px]  items-center ">
              <textarea
                className="inline-flex h-[150px] w-full flex-1 resize-none items-center justify-center  bg-slate-700 px-[10px] text-[16px]  leading-none  text-cyan-400 outline-none"
                id="content"
                placeholder={`what on your mind ?`}
                ref={contentRef}
                disabled={isMutateLoading}
              />
            </fieldset>
            <div className="mt-[25px] flex justify-end">
              <motion.button
                className="inline-flex h-[35px] items-center justify-center font-medium"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSubmit}
                disabled={isMutateLoading}
              >
                <RocketLaunchIcon className="h-6 w-6 text-slate-300 hover:text-indigo-400" />
              </motion.button>
            </div>
            <Dialog.Close asChild>
              <motion.button
                className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px]  items-center justify-center rounded-full  hover:bg-slate-500"
                aria-label="Close"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <XMarkIcon className="text-white" />
              </motion.button>
            </Dialog.Close>
          </Dialog.Content>
        </motion.div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default CreatePost;
