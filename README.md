<h1 align="center">kiss-worker-demo4</h1>
<p align="center">
  <a href="https://github.com/andreashuber69/kiss-worker-demo4/actions/workflows/ci.yml">
    <img src="https://github.com/andreashuber69/kiss-worker-demo4/actions/workflows/ci.yml/badge.svg" alt="CI">
  </a>
  <a href="https://github.com/andreashuber69/kiss-worker-demo4/issues">
    <img src="https://img.shields.io/github/issues-raw/andreashuber69/kiss-worker-demo4.svg" alt="Issues">
  </a>
  <a href="https://github.com/andreashuber69/kiss-worker-demo4/blob/develop/LICENSE">
    <img src="https://img.shields.io/github/license/andreashuber69/kiss-worker-demo4.svg" alt="License">
  </a>
</p>

Demonstrates the most general way to use `kiss-worker` with an object, see
[Worker Code Isolation](https://www.npmjs.com/package/kiss-worker#worker-code-isolation).

You can play with this on [StackBlitz](https://stackblitz.com/~/github.com/andreashuber69/kiss-worker-demo4). To compile
the example on your computer and run it in your browser you can proceed as follows (requires
[node](https://nodejs.org/en/download) >=18.18):

```bash
git clone https://github.com/andreashuber69/kiss-worker-demo4.git
cd kiss-worker-demo4
npm install
npm start
```

Naturally, the exact same worker code also runs on node (but **not** on StackBlitz, unfortunately):

```bash
npm run node-start
```
