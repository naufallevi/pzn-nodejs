export class TodolistService {
  todolist = ["example1", "example2", "example3"];

  getJsonTodolist() {
    return JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todolist.map((value, index) => {
        return {
          id: index,
          todo: value,
        };
      }),
    });
  }

  getTodolist(request, response) {
    response.write(this.getJsonTodolist());
    response.end();
  }

  createTodolist(request, response) {
    request.addListener("data", (data) => {
      const body = JSON.parse(data);
      this.todolist.push(...body.map(value => value.todo));

      response.write(this.getJsonTodolist());
      response.end();
    });
  }

  updateTodolist(request, response) {
    request.addListener("data", (data) => {
      const body = JSON.parse(data);

      if (this.todolist[body.id]) {
        this.todolist[body.id] = body.todo;
      }

      response.write(this.getJsonTodolist());
      response.end();
    });
  }

  deleteTodolist(request, response) {
    request.addListener("data", (data) => {
      const body = JSON.parse(data);

      if (this.todolist[body.id]) {
        this.todolist.splice(body.id, 1);
      }

      response.write(this.getJsonTodolist());
      response.end();
    });
  }
}
