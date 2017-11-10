const defaultOptions = {
  maxTasksInParallel: 1
}

module.exports = class ParallelThrottle {
  constructor (options = {}) {
    const {maxTasksInParallel} = {...defaultOptions, ...options}

    if (!(maxTasksInParallel > 0)) throw new Error('maxTasksInParallel must be greater than 0')

    this._maxTasksInParallel = maxTasksInParallel
    this._runningCount = 0
    this._tasks = []
  }

  add (task) {
    return new Promise((resolve, reject) => {
      this._tasks.push(() => {
        ++this._runningCount
        task().then(resolve).catch(reject).then(() => {
          --this._runningCount
          this._runTasks()
        })
      })
      this._runTasks()
    })
  }

  _runTasks () {
    while (this._tasks.length > 0 && this._runningCount < this._maxTasksInParallel) {
      this._tasks.shift()()
    }
  }
}