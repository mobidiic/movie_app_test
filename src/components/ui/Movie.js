import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinesEllipsis from 'react-lines-ellipsis'
// import StarRating from './StarRating'
import '../../../stylesheets/Movie.scss'

class Movie extends Component {
  render(){
    const { title, poster, genres, synopsis, rating } =this.props
    return(
      <div className="movie-wrapper">
        <div className="movie__columns">
          <MoviePoster poster={poster} alt={title}/>
        </div>
        <div className="movie__columns">
          <h2>{title}</h2>
          <div className="movie__rating">
          </div>
          <div className="movie__genres">
            {genres.map((genre, i) => {
              return <MovieGenre genre={genre} key={i} />
            })}
          </div>
          <div className="movie__synopsis">
            <LinesEllipsis text={synopsis}
                           maxLine= '3'
                           ellipsis= '...'
                           trimRight
                           basedOn = 'letters' />
          </div>
        </div>
      </div>
    )
  }
}

const MovieGenre = ({genre}) => {
  return <span className="movie__genres">{genre}</span>
}


const MoviePoster = ({poster, alt}) => {
  return (
    <img className="movie__poster" src={poster} alt={alt} title={alt} />
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
  rating: PropTypes.number
}

MovieGenre.propTypes ={
  genre : PropTypes.string
}

MoviePoster.propTypes = {
  poster: PropTypes.string,
  alt: PropTypes.string
}

export default Movie
