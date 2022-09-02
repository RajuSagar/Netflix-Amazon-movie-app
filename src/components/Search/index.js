import {Component} from 'react'
import Header from '../Header'

import MovieContext from '../../context/MovieContext'
import Footer from '../Footer'

import SearchItems from '../SearchItems'
import './index.css'

class Search extends Component {
  //   state = {searchInput: ''}

  render() {
    return (
      <MovieContext.Consumer>
        {value => {
          const {username} = value
          console.log('username from Home', {username})

          return (
            <div className="search-main-container" testid="searchRoute">
              <Header />
              <div className="search-container">
                <SearchItems />
              </div>
              <Footer />
            </div>
          )
        }}
      </MovieContext.Consumer>
    )
  }
}
export default Search
