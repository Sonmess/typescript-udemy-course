interface Todo {
  id: number;
  text: string;
}

let TODOS: Todo[] = [];

export function getTodos() {
  return TODOS;
}

export function addTodo(text: string) {
  const newTodo = { id: Math.random(), text };
  TODOS.push(newTodo);
  return newTodo;
}

export function getTodo(id: number) {
  const todo = TODOS.find(t => t.id === id);
  if (!todo) {
    throw new Error('Todo was not found');
  }
  return todo;
}

export function removeTodo(id: number) {
  TODOS = TODOS.filter(t => t.id !== id);
}

export function updateTodo(id: number, text: string) {
  const toto = getTodo(id);
  toto.text = text;
  return toto;
}