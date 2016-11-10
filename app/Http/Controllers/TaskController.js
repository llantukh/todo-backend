'use strict'

const Task = use('App/Model/Task')

class TaskController {

  * create (request, response) {
    let data = request.only('title', 'list_id', 'due_date', 'done')
    let task = yield Task.create(data)

    response.status(201).json(task)
  }

  * index (request, response) {
    let listId = request.param('list_id')
    let tasks = yield Task.query().where('list_id', listId)

    response.json(tasks)
  }

  * update (request, response) {

  let taskId = request.param('task_id')
  // task_id is in the route
  let task = yield Task.findBy('id', taskId)
  // where in my task table is the id equal to the id receive in request? store it in this new task var
  let data = request.only('title', 'list_id', 'due_date', 'done')
  // this is the new data/update that will override old info
  task.fill(data)
  //this replaces all the old data with the new updated data for you
  yield task.save()

  response.json(task)
}

  * delete (request, response) {
    let deleteId = request.only('task_id')
    let deleteTask = yield Task.findBy('id', taskId)
    yield deleteTask.del()

  }

}

module.exports = TaskController
