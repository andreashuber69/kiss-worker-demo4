import { implementWorkerExternal } from "kiss-worker";

// Import the type of our function ...
import type { GetFibonacci } from "./getFibonacci.js";

// ... and pass it to establish type safety
export const GetFibonacciWorker = implementWorkerExternal<GetFibonacci>(
    // A function that creates a web worker running the script that
    // serves our function
    () => new Worker(
        new URL("getFibonacci.js", import.meta.url),
        { type: "module" }
    ),
);
