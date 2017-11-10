# Parallel Throttle

> Throttle async task with parallel limitation.

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