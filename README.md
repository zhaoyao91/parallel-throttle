# Parallel Throttle

> Throttle async task with parallel limitation.

## Deprecation

**This package is deprecated to prefer the new [runs-limit-func](https://github.com/zhaoyao91/runs-limit-func) package.**

## Installation

```
npm i parallel-throttle
```

## Usage

```ecmascript 6
const ParallelThrottle = require('parallel-throttle')

// every task is an async function without any argument
const tasks = [...]

const throttle = new ParallelThrottle({maxTasksInParallel: 100})

tasks.forEach(task => {
  throttle.add(task).then(...).catch(...)
})
```

## License

MIT