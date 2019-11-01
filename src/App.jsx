import React from 'react';
import About from './About';
import FaveFood from './FavoriteFood';
import FaveMovie from './FavoriteMovie';
import MainBlog from './MainBlog';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link

} from 'react-router-dom'
function App() {
  var foods = ["Pizza", "CheeseBurgers", "French Fries"]
  var movies = ["Edge of Tmrw", "Coming to America", ]
  return (
    <Router>
    <div className="App">
      <nav>
      <Link to="/">About</Link> { ' | '}
      <Link to="/favefood">Foods</Link> { ' | '}
      <Link to="/favemovie">Movies</Link> { ' | '}
      <Link to="/mainblog">Blog</Link>

      </nav>
      <Route exact path="/" component={About} />
      <Route exact path="/favefood" render={ (props) => <FaveFood foods={foods} /> }/>
      <Route exact path="/favemovie"  render={ (props) => <FaveMovie movies={movies} /> }/>
      <Route exact path="/mainblog" component={MainBlog}/>
    </div>

    </Router>
  );
}

export default App;
