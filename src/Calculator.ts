import { serveObject } from "kiss-worker";

// We want to serve an object of this class on a worker thread
class Calculator {
    public multiply(left: bigint, right: bigint) {
        return left * right;
    }

    public divide(left: bigint, right: bigint) {
        return left / right;
    }
}

// Pass the constructor function of the class so that the worker thread
// can create a new object and its methods can be called from the thread
// executing implementObjectWorkerExternal
serveObject(Calculator);

// Export the type only
export type { Calculator };
