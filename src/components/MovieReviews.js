// Code MovieReviews Here
import React from "react"

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map((review) => (
        <div className="review">
          <a href={review.link.url}>
            <h2>{review.headline}</h2>
          </a>
          <p>{review.summary_short}</p>
        </div>
      ))}
    </div>
  )
}

export default MovieReviews
