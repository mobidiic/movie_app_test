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



const MoviePoster = ({poster}) => {
  return (
    <img src={poster} alt='movie poster' />
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genre: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
  rating: PropTypes.number
}

MoviePoster.propTypes = {
  poster: PropTypes.string
}

export default Movie
