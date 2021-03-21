import React, {Component} from "react"
import "isomorphic-fetch"
import MovieReviews from "./MovieReviews"

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ"
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}&query=`

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: "",
  }

  handleInputChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(URL.concat(this.state.searchTerm))
      .then((res) => res.json())
      .then((reviewsData) => this.setState({reviews: reviewsData.results}))
  }

  render() {
    return (
      <div className="searchable-movie=reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search Movie Reviews</label>
          <input
            id="search-input"
            type="text"
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
