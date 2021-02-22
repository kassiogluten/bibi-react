import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logoBibi from "./logo.png";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <>
      <Router>
        <main>
          <div>
            <img src={logoBibi} width="150px" className="logo" />
            <nav>
              <div>
                <Link to="/">Inicio</Link>
              </div>
              <div>
                <Link to="/termos">Termos</Link>
              </div>
              <div>
                <Link to="/politica">Politica</Link>
              </div>
            </nav>
          </div>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/termos">
              <Termos />
            </Route>
            <Route path="/politica">
              <Politica />
            </Route>
            <Route path="/">
              <Inicio />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

function Inicio() {
  return (
    <>
      <h1>Inicio</h1>
      <p>Contato:</p>
    </>
  );
}

function Termos() {
  return <h1>Termos de uso</h1>;
}

function Politica() {
  return <h1>Política de privacidade</h1>;
}

export default App;
