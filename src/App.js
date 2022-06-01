import "./App.scss";
import Home from "./pages/Home/Home";
import Album from "./pages/Album/Album";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/albums" component={Album} />
          <Route path="/albums/:id" component={Album} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
