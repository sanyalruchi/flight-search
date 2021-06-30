import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/dashboard/index';
import FlightResults from './components/flight-search-results/FlightResults';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route path="/flights-results" component={FlightResults}></Route>
      </Switch>
    </Router>
  );
}

export default App;
