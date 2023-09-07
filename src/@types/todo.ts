export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  filter: IFilter;
  getTodos: () => void;
  addTodo: (title: string) => void;
  updateTodo: (id: number) => void;
  deleteCompletedTodos: () => void;
  changeFilter: (filter: IFilter) => void;
};

export type IFilter = "All" | "Completed" | "Active";
