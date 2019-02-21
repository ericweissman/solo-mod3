import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../../styles/index.scss'
import { fetchArtists} from '../../thunks/fetchArtists'
import Instructions from '../../components/Instructions/Instructions'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Instructions />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  deepHouse: state.deepHouse,
  futureBass: state.futureBass,
  glitchHop: state.glitchHop,
  trap: state.trap
})

export const mapDispatchToProps = (dispatch) => ({
  fetchArtists: (url) => dispatch(fetchArtists(url))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
