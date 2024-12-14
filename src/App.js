import { Link } from "react-router-dom";

function App() {
  const title = "Hello World!";

  return (
    <div className="App">
      <h1>{title}</h1>
      <Link to='/dashboard'>
        ボタン
      </Link>
    </div>
  );
}

export default App;
