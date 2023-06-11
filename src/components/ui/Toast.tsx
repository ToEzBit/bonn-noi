import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { toast, Toaster, ToastBar } from "react-hot-toast";

const notify = (msg: string | undefined = "") => toast(msg);

const Toast = () => {
  return (
    <Toaster>
      {(t) => (
        <ToastBar toast={t}>
          {({ message }) => (
            <div className="flex items-center">
              <div>{message}</div>
              <motion.button
                onClick={() => toast.dismiss(t.id)}
                className="ml-0.5 flex h-6 w-6 items-center justify-center rounded-full hover:bg-slate-500"
                aria-label="Close"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <XMarkIcon className="h-5 text-black" />
              </motion.button>
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};
export { notify };
export default Toast;
