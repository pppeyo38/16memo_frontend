import { setupWorker } from "msw";
import { handlers } from "./handler/memo/handler";

export const worker = setupWorker(...handlers);
