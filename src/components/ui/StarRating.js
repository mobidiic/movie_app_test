import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../../stylesheets/StarRating.scss'

// class StarRating extends Component{
//   state= {}
//
//   render(){
//     const totalStars = 5
//     const { rating } = this.props
//     const _subStar = (rating) => {
//      const subStar = rating%2
//      const widthChange = document.querySelector('star-rating').style.width
//      widthChange= `${subStar/2*100}%`
//      return widthChange
//    }
//     return (
//       <div className="star-wrapper">
//         <div className="star-rating">
//           {[...Array(totalStars).map((n,i) =>
//             <Star key={i}/>
//           )]}
//           {_subStar(rating)}
//         </div>
//       </div>
//     )
//   }
// }


const Star = () => {
  return (
    <div className="star">
    </div>
)}


StarRating.propTypes = {
  starsSelected: PropTypes.number
}

// export default StarRating
