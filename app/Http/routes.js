'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')


//Routes for users table
Route.post('/users', 'UserController.create')
Route.get('/users/:id', 'UserController.show')

//Routes for todo_lists table
Route.post('/users/:id/todo-lists', 'TodoListController.create')
Route.get('/users/:id/todo-lists', 'TodoListController.index')

//Routes for tasks table
Route.post('/users/:user_id/todo-lists/:list_id/tasks', 'TaskController.create')
Route.get('/users/:user_id/todo-lists/:list_id/tasks', 'TaskController.index')
Route.get('/users/:user_id/todo-lists/:list_id/tasks/:task_id', 'TaskController.show')
Route.put('/users/:user_id/todo-lists/:list_id/tasks/:task_id', 'TaskController.update')
