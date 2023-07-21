import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Add from './Add';
import AnimeData from './AnimeData';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path ="/add">
            <Add />
          </Route>

          <Route path ="/anime/:id">
            <AnimeData/>
          </Route>

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
