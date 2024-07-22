import { useEffect, useState } from "react";
export default function useGetViewPortWith() {
  const [viewPortWith, setViewPortWith] = useState(0);

  useEffect(() => {
    setViewPortWith(window.innerWidth);
  }, []);

  return viewPortWith;
}
