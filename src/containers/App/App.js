import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../../styles/index.scss'
import * as actions from '../../actions/index.js'
import { fetchArtists } from '../../thunks/fetchArtists'
import Instructions from '../../components/Instructions/Instructions'
import NotFound from '../../components/NotFound/NotFound'
import Error from '../../components/Error/Error'
import Nav from '../Nav/Nav'
import ArtistArea from '../ArtistArea/ArtistArea'

class App extends Component {

  render() {
    const { hasErrored } = this.props
    switch (hasErrored) {
      case '':
        return (
          <div className="App">
            <Nav />
            <Switch>
              <Route exact path='/' component={Instructions} />
              <Route path='/glitchHop' render={({ match }) => <ArtistArea match={match} />} />
              <Route path='/deepHouse' render={({ match }) => <ArtistArea match={match} />} />
              <Route path='/futureBass' render={({ match }) => <ArtistArea match={match} />} />
              <Route path='/trap' render={({ match }) => <ArtistArea match={match} />} />
              <Route component={NotFound} />
            </Switch>
          </div>
        );
      default:
        return (
          <Error message={hasErrored}/>
        )
    }
  }
}

  export const mapStateToProps = (state) => ({
    deepHouse: state.deepHouse,
    futureBass: state.futureBass,
    glitchHop: state.glitchHop,
    trap: state.trap,
    hasErrored: state.hasErrored,
  })

  export const mapDispatchToProps = (dispatch) => ({
    fetchArtists: (url, actionToDispatch) => dispatch(fetchArtists(url, actionToDispatch)),
  })


  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
