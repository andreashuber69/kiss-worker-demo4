import { serve } from "kiss-worker";

// The function we want to execute on a worker thread
const getFibonacci = (n: number): number =>
    (n < 2) ? Math.floor(n) : getFibonacci(n - 1) + getFibonacci(n - 2);

// Serve our function, so that it can be called from the thread that
// calls implementWorkerExternal
serve(getFibonacci);

// Export the type only
export type GetFibonacci = typeof getFibonacci;
