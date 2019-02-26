import React, { Component } from 'react'
import * as actions from '../../actions'
import { fetchArtists } from '../../thunks/fetchArtists'
import { connect } from 'react-redux'
import Card from '../../containers/Card/Card'
import FavoritesInstructions from '../../components/FavoritesInstructions/FavoritesInstructions'
import Loading from '../../components/Loading/Loading'
import * as url from '../../utils/urls'
const key = require('short-id')

export class ArtistArea extends Component {

  getArtists = () => {
    const { glitchHop, futureBass, trap, deepHouse, favorites } = this.props
    switch (this.props.match.path) {
      case '/glitchHop':
        if (glitchHop.length === 0) {
          this.props.fetchArtists(url.glitchHop, actions.getGlitchHopSuccess, favorites)
        }
        return 'glitchHop'
      case '/deepHouse':
        if (deepHouse.length === 0) {
          this.props.fetchArtists(url.deepHouse, actions.getDeepHouseSuccess, favorites)
        }
        return 'deepHouse'
      case '/trap':
        if (trap.length === 0) {
          this.props.fetchArtists(url.trap, actions.getTrapSuccess, favorites)
        }
        return 'trap'
      case '/futureBass':
        if (futureBass.length === 0) {
          this.props.fetchArtists(url.futureBass, actions.getFutureBassSuccess, favorites)
        }
        return 'futureBass'
      case '/favorites':
        return 'favorites'
      default:
        return null
    }
  }

  cardsToDisplay = () => {
    const { glitchHop, futureBass, trap, deepHouse, favorites, isLoading } = this.props
    const genre = this.getArtists()
    let cards
    cards = this.props[genre].map(artist => {
      return <Card artist={artist} key={key.generate()} />
    })
    return cards
  }

  render() {
    const { glitchHop, futureBass, trap, deepHouse, favorites, isLoading } = this.props
    const genre = this.getArtists()
    return (
      <div class='artist-area'>
        {this.cardsToDisplay()}
        {
          (isLoading && genre !== 'favorites') && <Loading />
        }
        {
          (!favorites.length && genre === 'favorites') && <FavoritesInstructions />
        }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  glitchHop: state.glitchHop,
  trap: state.trap,
  deepHouse: state.deepHouse,
  futureBass: state.futureBass,
  isLoading: state.isLoading,
  favorites: state.favorites,
})

export const mapDispatchToProps = (dispatch) => ({
  fetchArtists: (url, actionToDispatch, favorites) => dispatch(fetchArtists(url, actionToDispatch, favorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistArea)
