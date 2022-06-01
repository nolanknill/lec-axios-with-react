import "./App.scss";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Album from "./pages/Album/Album";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/albums" exact component={Album} />
          <Route path="/albums/:id" component={Album} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
