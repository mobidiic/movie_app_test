import React, { Component } from 'react'
import Movie from './ui/Movie'


class App extends Component{

  state = {
    movies : [
      {
        title: 'star wars',
        poster: 'https://lumiere-a.akamaihd.net/v1/images/swtlj_imax_oversize_1-sht_v6_lg_d4edae12.jpeg?region=0%2C0%2C827%2C1200'
      },
      {
        title:'Harry Poter',
        poster: 'https://i.pinimg.com/236x/b9/59/44/b959449bb17f6bc47779594958358b10--harry-potter-illustrations-book-design.jpg'
      },
      {
        title: 'Oldboy',
        poster: 'https://img.posterlounge.co.uk/images/wbig/poster-oldboy-minimal-film-movie-fanart-alternative-1579951.jpg'
      },
      {
        title: 'god father',
        poster: 'https://i.ebayimg.com/images/g/PqEAAOSwbF1Z-qnj/s-l300.jpg'
      }
    ]
  }


  render(){
    return (
      <div className="movieList">
        {this.state.movies.map((movie, i) => {
        return <Movie title={movie.title} poster={movie.poster} key={i}/>
        })}
      </div>
    )
  }
}


export default App
