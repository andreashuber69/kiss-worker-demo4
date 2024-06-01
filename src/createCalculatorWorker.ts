import { ObjectInfo, implementObjectWorkerExternal, Worker } from
    "kiss-worker";

// Import the type only
import type { Calculator } from "./Calculator.ts";

export const createCalculatorWorker = implementObjectWorkerExternal(
    // A function that creates a worker running the script serving
    // the object
    () => new Worker(
        new URL("Calculator.ts", import.meta.url),
        { type: "module" },
    ),
    // Provide required information about the served object
    new ObjectInfo<typeof Calculator>(),
);
