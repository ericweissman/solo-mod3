import React, { Component } from 'react'
import * as actions from '../../actions'
import { fetchArtists } from '../../thunks/fetchArtists'
import { connect } from 'react-redux'
const dhURL = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=robin schulz&k=330926-musicly-0PJ7J0DT&type=band&verbose=1&info=1&limit=25`
const ghURL = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=michal menert&k=330926-musicly-0PJ7J0DT&type=band&verbose=1&info=1&limit=25`
const fbURL = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=hermitude&k=330926-musicly-0PJ7J0DT&type=band&verbose=1&info=1&limit=25https://cors-anywhere.herokuapp.com/`
const tURL = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=baauer&k=330926-musicly-0PJ7J0DT&type=band&verbose=1&info=1&limit=25https://cors-anywhere.herokuapp.com/`

class ArtistArea extends Component {
  
  getArtists = () => {
    switch (this.props.match.path) {
      case '/glitchHop':
        if (this.props.glitchHop.length === 0) {
          this.props.fetchArtists(ghURL, actions.getGlitchHopSuccess)
        }
        return 'glitchHop'
      case '/deepHouse':
        if (this.props.deepHouse.length === 0) {
          this.props.fetchArtists(dhURL, actions.getDeepHouseSuccess)
        }
        return 'deepHouse'
      case '/trap':
        if (this.props.trap.length === 0) {
          this.props.fetchArtists(tURL, actions.getTrapSuccess)
        }
        return 'trap'
      case '/futureBass':
        if (this.props.futureBass.length === 0) {
          this.props.fetchArtists(fbURL, actions.getFutureBassSuccess)
        }
        return 'futureBass'
      default:
        return null
    }
  }

  render() {
    this.getArtists()
    return (
      <div>
        card area
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  glitchHop: state.glitchHop,
  trap: state.trap,
  deepHouse: state.deepHouse,
  futureBass: state.futureBass
})

export const mapDispatchToProps = (dispatch) => ({
  fetchArtists: (url, actionToDispatch) => dispatch(fetchArtists(url, actionToDispatch))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistArea)