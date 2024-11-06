import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route>
          <h1>React Router</h1>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
