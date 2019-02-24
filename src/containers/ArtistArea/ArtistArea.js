import React, { Component } from 'react'
import * as actions from '../../actions'
import { fetchArtists } from '../../thunks/fetchArtists'
import { connect } from 'react-redux'
import Card from '../../containers/Card/Card'
import * as url from '../../utils/urls'
import Loading from '../../components/Loading/Loading'
const key = require('short-id')

export class ArtistArea extends Component {

  getArtists = () => {
    const { glitchHop, futureBass, trap, deepHouse } = this.props
    switch (this.props.match.path) {
      case '/glitchHop':
        if (glitchHop.length === 0) {
          this.props.fetchArtists(url.glitchHop, actions.getGlitchHopSuccess)
        }
        return 'glitchHop'
      case '/deepHouse':
        if (deepHouse.length === 0) {
          this.props.fetchArtists(url.deepHouse, actions.getDeepHouseSuccess)
        }
        return 'deepHouse'
      case '/trap':
        if (trap.length === 0) {
          this.props.fetchArtists(url.trap, actions.getTrapSuccess)
        }
        return 'trap'
      case '/futureBass':
        if (futureBass.length === 0) {
          this.props.fetchArtists(url.futureBass, actions.getFutureBassSuccess)
        }
        return 'futureBass'
      case '/favorites':
        this.fetchAllArtists()
        return 'favorites'
      default:
        return null
    }
  }

  fetchAllArtists = () => {
    const { glitchHop, futureBass, trap, deepHouse } = this.props
    if (glitchHop.length === 0) {
      this.props.fetchArtists(url.glitchHop, actions.getGlitchHopSuccess)
    }
    if (deepHouse.length === 0) {
      this.props.fetchArtists(url.deepHouse, actions.getDeepHouseSuccess)
    }
    if (trap.length === 0) {
      this.props.fetchArtists(url.trap, actions.getTrapSuccess)
    }
    if (futureBass.length === 0) {
      this.props.fetchArtists(url.futureBass, actions.getFutureBassSuccess)
    }
  }

  cardsToDisplay = () => {
    const { glitchHop, futureBass, trap, deepHouse, favorites, isLoading } = this.props
    const genre = this.getArtists()
    const allGenres = glitchHop.concat(deepHouse).concat(trap).concat(futureBass)
    let cards
    if (genre === 'favorites') {
      cards = allGenres.map((artist) => {
        if (favorites.includes(artist.id)) {
          return <Card artist={artist} key={key.generate()} />
        }
      })
    } else {
      cards = this.props[genre].map(artist => {
        if (this.props.favorites.includes(artist.id)) {
          artist.favorited = true
        }
        return <Card artist={artist} key={key.generate()} />
      })
    }
    if (isLoading) {
      return <Loading />
    }
    return cards
  }

  render() {
    return (
      <div>
        {this.cardsToDisplay()}
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
  fetchArtists: (url, actionToDispatch) => dispatch(fetchArtists(url, actionToDispatch))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistArea)
