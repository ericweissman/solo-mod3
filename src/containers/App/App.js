import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../../styles/index.scss'
import * as actions from '../../actions/index.js'
import { fetchArtists} from '../../thunks/fetchArtists'
import Instructions from '../../components/Instructions/Instructions'
import NotFound from '../../components/NotFound/NotFound'
import Nav from '../Nav/Nav'

const dhURL = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=robin schulz&k=330926-musicly-0PJ7J0DT&type=band&verbose=1&info=1&limit=25`
    const ghURL = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=michal menert&k=330926-musicly-0PJ7J0DT&type=band&verbose=1&info=1&limit=25`
    const fbURL = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=hermitude&k=330926-musicly-0PJ7J0DT&type=band&verbose=1&info=1&limit=25https://cors-anywhere.herokuapp.com/`
    const tURL = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=baauer&k=330926-musicly-0PJ7J0DT&type=band&verbose=1&info=1&limit=25https://cors-anywhere.herokuapp.com/`

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Instructions /> */}
        <Nav />
        <Switch>
            <Route exact path='/' component={Instructions} />
            
            <Route component={NotFound} />
        </Switch>
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
  fetchArtists: (url, actionToDispatch) => dispatch(fetchArtists(url, actionToDispatch)),
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
