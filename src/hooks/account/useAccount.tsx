import { useContext } from "react";

import {
  AccountContext,
  AccountContextType,
} from "../../providers/AccountProvider";

export const useAccount = (): AccountContextType => useContext(AccountContext);
