import logo from './logo.svg';
import './App.css';
import Navigation from './views/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>

      </header>
    </div>
  );
}

export default App;
