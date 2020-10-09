import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import PokemonsIndex from "./Components/Pokemons/index";
import Show from "./Components/Pokemons/Show";
function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/pokemons">Pokemons</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/pokemons">
              <PokemonsIndex />
            </Route>
            <Route exact path="/pokemons/:id">
              <Show />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
