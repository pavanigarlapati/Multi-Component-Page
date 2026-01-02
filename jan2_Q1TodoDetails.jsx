import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTodoById } from "../api/todoService";

function TodoDetails() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    getTodoById(id)
      .then((data) => setTodo(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!todo) return <h3>Loading Todo Details...</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo Details</h2>

      <p><b>ID:</b> {todo.id}</p>
      <p><b>Title:</b> {todo.title}</p>
      <p><b>Status:</b> {todo.completed ? "Completed" : "Not Completed"}</p>

      <Link to="/">⬅ Back to Todos</Link>
    </div>
  );
}

export default TodoDetails;
