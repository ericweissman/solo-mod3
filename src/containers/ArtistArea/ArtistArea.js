import React, { Component } from 'react'
import * as actions from '../../actions'
import { fetchArtists } from '../../thunks/fetchArtists'
import { connect } from 'react-redux'
import Card from '../../containers/Card/Card'
import * as url from '../../utils/urls'
import Loading from '../../components/Loading/Loading'
const key = require('short-id')

class ArtistArea extends Component {

  getArtists = () => {
    switch (this.props.match.path) {
      case '/glitchHop':
        if (this.props.glitchHop.length === 0) {
          this.props.fetchArtists(url.glitchHop, actions.getGlitchHopSuccess)
        }
        return 'glitchHop'
      case '/deepHouse':
        if (this.props.deepHouse.length === 0) {
          this.props.fetchArtists(url.deepHouse, actions.getDeepHouseSuccess)
        }
        return 'deepHouse'
      case '/trap':
        if (this.props.trap.length === 0) {
          this.props.fetchArtists(url.trap, actions.getTrapSuccess)
        }
        return 'trap'
      case '/futureBass':
        if (this.props.futureBass.length === 0) {
          this.props.fetchArtists(url.futureBass, actions.getFutureBassSuccess)
        }
        return 'futureBass'
      case '/favorites':
        return 'favorites'
      default:
        return null
    }
  }

  cardsToDisplay = () => {
    const genre = this.getArtists()
    const cards = this.props[genre].map(artist => {

      return <Card artist={artist} key={key.generate()} />
    })
    const {isLoading} = this.props
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