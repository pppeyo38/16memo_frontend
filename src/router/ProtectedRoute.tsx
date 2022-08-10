import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useLoginUser } from "../hooks/useLoginUser";

export const ProtectedRoute: FC = () => {
  const { loginUser } = useLoginUser();

  if (!loginUser?.isAdmin) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
