'use strict'

const Schema = use('Schema')

class TasksTableSchema extends Schema {

  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.timestamps()
      table.string('title')
      table.integer('list_id')
      table.date('due_date')
      table.bool('done')
    })
  }

  down () {
    this.drop('tasks')
  }

}

module.exports = TasksTableSchema
