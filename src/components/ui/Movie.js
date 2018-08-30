import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../../stylesheets/Movie.scss'

class Movie extends Component {
  render(){
    return(
      <div className="movie-wrapper">
        <MoviePoster poster={this.props.poster}/>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

class MoviePoster extends Component{
  render(){
    return (
      <img src={this.props.poster} />
    )
  }
}

Movie.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string
}

MoviePoster.propTypes = {
  poster: PropTypes.string
}

export default Movie
