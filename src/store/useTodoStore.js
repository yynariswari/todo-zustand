import { create } from "zustand";

export const useTodoStore = create((set) => ({
  user: "Guest",
  setUser: (user) => set({ user }),

  todos: [
    {
      id: 1,
      title: "Belajar React",
      description: "Belajar hooks dan state",
      votes: 0,
    },
    {
      id: 2,
      title: "Belajar Zustand",
      description: "Belajar global state sederhana",
      votes: 0,
    },
    {
      id: 3,
      title: "Belajar Routing",
      description: "Belajar react-router-dom",
      votes: 0,
    },
  ],

  voteTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, votes: todo.votes + 1 } : todo
      ),
    })),

  getTodoById: (id) => (get) => {
    return get().todos.find((todo) => todo.id === parseInt(id));
  },
}));
