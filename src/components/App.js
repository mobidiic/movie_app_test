import React, { Component } from 'react'
import Movie from './ui/Movie'
import '../../stylesheets/App.scss'


class App extends Component{

  state={

  }

  componentDidMount(){
    this._getMovies()
  }


  _renderMovies = () => {
    console.log(this.state.movies)
    const movies = this.state.movies.map((movie) => {
      return <Movie title={movie.title}
                    poster={movie.medium_cover_image}
                    key={movie.id}
                    genres={movie.genres}
                    rating={movie.rating}
                    synopsis={movie.synopsis} />
    })
    return movies
  }


  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies: movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(res => res.json())
    .then(json => json.data.movies)
    .catch(e => console.error(e))
  }

  render(){
    const { movies } = this.state 
    return (
      <div className={ movies ? "movie-List" : "list-loading"}>
        {movies ? this._renderMovies() : 'Loading' }
      </div>
    )
  }
}


export default App
