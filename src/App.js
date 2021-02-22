import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logoBibi from "./logo.png";
import Termo from "./Termo";

function App() {
  return (
    <>
      <Router>
        <main>
          <div>
            <img
              src={logoBibi}
              alt="logo bibi mototaxi"
              width="150px"
              className="logo"
            />
            <nav>
              <div>
                <Link to="/">Inicio</Link>
              </div>
              <div>
                <Link to="/novomotorista">Novo Motorista</Link>
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
            <Route path="/novomotorista">
              <NovoMotorista />
            </Route>
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
    <div>
      <p>Formas de atendimento:</p>
      <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/bibi.mototaxi">
        Instagram
      </a>
      <a target="_blank" rel="noopener noreferrer" href="mailto:kassiogluten@gmail.com">
        E-mail
      </a>
    </div>
  );
}
function NovoMotorista() {
  return (
    <div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfAM9Ss8O2-FgUA2SOhwDjuC2qTGXi_AT4JewgOwc6HzqvQLg/viewform">
        Clique aqui para acessar o formulário de cadastro
      </a>
    </div>
  );
}

function Termos() {
  return (
    <div>
      <Termo />
    </div>
  );
}

function Politica() {
  return (
    <div>
      <Termo />
    </div>
  );
}

export default App;
