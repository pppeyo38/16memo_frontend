import { setupWorker } from "msw";
import * as handler from "./handler";

export const worker = setupWorker(...Object.values(handler));
