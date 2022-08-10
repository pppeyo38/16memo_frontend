import type { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useLoginUser } from "../hooks/useLoginUser";

export const ProtectedRoute: FC = () => {
  const { loginUser } = useLoginUser();

  if (!loginUser?.isAdmin && loginUser === null) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
