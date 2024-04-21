import { implementWorkerExternal } from "kiss-worker";

// Import the type of the worker function ...
import type { GetFibonacci } from "./getFibonacci.js";

// ... and pass it to establish type safety
export const FibonacciWorker = implementWorkerExternal<GetFibonacci>(
    // A function that creates a web worker running the script that serves
    // the worker function
    () => new Worker(
        new URL("getFibonacci.js", import.meta.url),
        { type: "module" }
    ),
);
