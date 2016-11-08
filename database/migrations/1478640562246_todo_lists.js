'use strict'

const Schema = use('Schema')

class TodoListsTableSchema extends Schema {

  up () {
    this.create('todo_lists', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id')
      table.string('list_name')
    })
  }

  down () {
    this.drop('todo_lists')
  }

}

module.exports = TodoListsTableSchema
