import { ReactNode } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  background,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const DrawerWrap = ({ isOpen, onClose, children }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent
        style={{ backgroundColor: "#F2F2F2", borderRadius: "30px 30px 0 0" }}
      >
        {children}
      </DrawerContent>
    </Drawer>
  );
};
