import React     from 'react';
import Header    from './header.jsx';
import MovieList from './MovieList.jsx';
import Search    from './Search.jsx';
import AddMovie  from './AddMovie.jsx';
// import movies    from '../../../server/dummyData.js';

//  Connect Axios
const axios = require('axios');



class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movies : []
    };

    this.getSearchResult = this.getSearchResult.bind(this);
    this.reloadMovies    = this.reloadMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.addMovieDom = this.addMovieDom.bind(this);
  }

  componentDidMount() {
    axios.get('/movies')
    .then(this.reloadMovies)
    .catch((error) => {console.log(error)})
    // this.setState({movies: movies})
  }

  reloadMovies(response) {
    this.setState({movies: response.data});
  }

  addMovie(movie) {
    axios.post('/movie', movie)
    .then(res => {this.addMovieDom(movie)})
    .catch((error) => {console.log(error)})
  }

  addMovieDom (movie) {
    this.setState({movies:[...this.state.movies, movie]});
  }

  getSearchResult(query) {
    axios.get('/movies')
    .then((response) => {
      let movieList = response.data;
      let result = [];
      for (let i = 0; i < movieList.length; i++) {
        const title = movieList[i].name.toLowerCase();
        console.log('title: ', title);
        const newQuery = new RegExp(query.toLowerCase());
        console.log('query: ', newQuery);
        // console.log(newQuery.test(title));
        if (newQuery.test(title)) {
          result.push(movieList[i]);
        }
      }
      if (result.length < 1) {
        result.push({name: 'no movie by that name found'})
      }
      this.setState({movies: result});
    })
    .catch((error) => {console.log(error)})
  }

  render () {
    return (
      <div>
        <Header />
        <AddMovie handleAddMovie={this.addMovie}/>
        <Search handleSearchInput={this.getSearchResult}/>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;