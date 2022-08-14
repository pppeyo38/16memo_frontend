import { useState } from "react";

export const useSignOutPopup = () => {
  const [isOpenSignOut, setIsOpenSignOut] = useState<boolean>(false);

  const onOpenSignOutPopup = () => setIsOpenSignOut(true);
  const onCloseSignOutPopup = () => setIsOpenSignOut(false);

  return {
    isOpenSignOut,
    setIsOpenSignOut,
    onOpenSignOutPopup,
    onCloseSignOutPopup,
  };
};
