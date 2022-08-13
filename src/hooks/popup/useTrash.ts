import { useState } from "react";

export const useTrash = () => {
  const [isOpenTrash, setIsOpenTrash] = useState<boolean>(false);

  const onOpenTrash = () => setIsOpenTrash(true);
  const onCloseTrash = () => setIsOpenTrash(false);

  return { isOpenTrash, setIsOpenTrash, onOpenTrash, onCloseTrash };
};
