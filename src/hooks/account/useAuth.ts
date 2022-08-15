import { useContext } from "react";
import { AuthContext, CurrentUserType } from "../../providers/AuthProvider";

export const useAuth = (): CurrentUserType => useContext(AuthContext);
