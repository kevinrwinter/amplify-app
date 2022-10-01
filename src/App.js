import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>AWS Amplify Demo App</p>
        <a
          className="App-link"
          href="https://github.com/kevinrwinter/amplify-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </header>
    </div>
  );
}

export default App;
