import {Component} from 'react'
import Header from '../Header'

import MovieContext from '../../context/MovieContext'
import Footer from '../Footer'
// import LoadingElement from '../LoaderElement'
import PopularMovies from '../PopularMovies'

class Popular extends Component {
  //   state = {searchInput: ''}

  render() {
    return (
      <MovieContext.Consumer>
        {value => {
          const {username} = value
          console.log('username from Home', {username})

          return (
            <>
              <div className="home-container" testid="popular">
                <Header />
                <PopularMovies />
                <Footer />
              </div>
            </>
          )
        }}
      </MovieContext.Consumer>
    )
  }
}
export default Popular
