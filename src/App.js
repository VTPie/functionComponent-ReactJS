import './App.css';
import Navigation from './views/Navigation/Navigation';
import TODOList from './views/TODO/TODOList';
import Population from './views/Population/Population';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/Home/Home';
import { CountDownClass, CountDownFunc } from './views/CountDown/CountDown';

function App() {

  const onTimesup = () => {
    alert('Times up')
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigation></Navigation>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/population">
              <Population />
            </Route>
            <Route path="/todo">
              <TODOList />
            </Route>
            <Route path="/count">
              <CountDownClass onTimesup={onTimesup} />
              <span>-------------------</span>
              <CountDownFunc />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
