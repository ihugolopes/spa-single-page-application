
import { Header } from "./components/Header";
import { About } from "./views/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from "./views/Home";
import { MovieDetail } from "./views/MovieDetail.js";

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>

        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/movie/:id">
            <MovieDetail/>
          </Route>
          <Route path="/" exact={true}>
            <Home/>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
