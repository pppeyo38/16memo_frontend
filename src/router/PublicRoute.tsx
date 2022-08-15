import { FC } from "react";
import { Outlet } from "react-router-dom";
import Div100vh from "react-div-100vh";

export const PublicRoute: FC = () => {
  return (
    <Div100vh id="Div100vh">
      <Outlet />
    </Div100vh>
  );
};
