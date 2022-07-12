import { useState, useEffect } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  function onSubmit(event) {
    event.preventDefault();
    if (toDo === "")
      return;
    setToDo("");
    setToDoList(prev => [toDo, ...prev]);
  }
  return (
    <div>
      <h1>My To Dos ({toDoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={event => setToDo(event.target.value)} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDoList.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}
export default App;
