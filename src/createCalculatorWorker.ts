import { ObjectInfo, implementObjectWorkerExternal } from "kiss-worker";

// Import the type only
import type { Calculator } from "./Calculator.js";

export const createCalculatorWorker = implementObjectWorkerExternal(
    // A function that creates a web worker running the script serving
    // the object
    () => new Worker(
        new URL("Calculator.js", import.meta.url),
        { type: "module" },
    ),
    // Provide required information about the served object
    new ObjectInfo<typeof Calculator>("multiply", "divide"),
);
