import { type ReactNode, useEffect, useRef } from "react";

function useLog(dependencies: ReactNode) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return console.log("🚀 ~ ", dependencies);
  }, [dependencies]);
}

export default useLog;
