import { useParams, Link } from "react-router-dom";
import { useTodoStore } from "../store/useTodoStore";

export default function Detail() {
  const { id } = useParams();
  const todos = useTodoStore((s) => s.todos);
  const voteTodo = useTodoStore((s) => s.voteTodo);

  const todo = todos.find((t) => t.id === parseInt(id));

  if (!todo) return <p>Todo tidak ditemukan.</p>;

  return (
    <div style={{ padding: 20 }}>
      <Link to="/">⬅ Kembali</Link>

      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <p>Votes: {todo.votes}</p>
    </div>
  );
}
