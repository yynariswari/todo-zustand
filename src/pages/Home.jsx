import { useTodoStore } from "../store/useTodoStore";
import { Link } from "react-router-dom";

export default function Home() {
  const { todos, voteTodo, user, setUser } = useTodoStore();

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo List</h2>

      {/* Select user */}
      <label>Pilih User:</label>
      <select
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ display: "block", marginBottom: 20 }}
      >
        <option value="Guest">Guest</option>
        <option value="Adit Pratama">Adit Pratama</option>
        <option value="Rani Lestari">Rani Lestari</option>
        <option value="Bima Saputra">Salim</option>
        <option value="Salsa Ayu">Salim</option>
        <option value="Dito Wirawan">Salim</option>
      </select>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: 20 }}>
            <Link to={`/detail/${todo.id}`} style={{ fontSize: 18 }}>
              {todo.title}
            </Link>

            <div>
              <span>Votes: {todo.votes}</span>
              <button
                onClick={() => voteTodo(todo.id)}
                style={{ marginLeft: 10 }}
              >
                👍 Vote
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
