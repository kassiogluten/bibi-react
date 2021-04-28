import "./App.css";
import { Header } from "./components/Header";
import { GlobalStyle } from "./global";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
