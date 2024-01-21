/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  todos=[];

  add(todo){
    return this.todos.push(todo);
  }

  remove(indexOfTodo){
    return this.todos.splice(indexOfTodo,1);
  }

  update(index,updatedTodo){
    return this.todos.splice(index,0,updatedTodo);
  }

  
}

module.exports = Todo;
