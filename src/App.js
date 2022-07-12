import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue(x => x + 1);
  console.log("all time");
  useEffect(() => console.log("only once"), []);
  useEffect(() => {
    if(keyword)
      console.log("searching...");
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={event => setKeyword(event.target.value)}
        type="text"
        placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
export default App;
