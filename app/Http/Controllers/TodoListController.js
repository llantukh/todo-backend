'use strict'

const TodoList = use('app/Model/Todolist.js')

class TodoListController {

  * example (request, response) {
    response.json({ message: "hello world" })
  }

}

module.exports = TodoListController
