import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../../styles/index.scss'
import { populateFavorites } from '../../actions'
import Instructions from '../../components/Instructions/Instructions'
import NotFound from '../../components/NotFound/NotFound'
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg'
import Nav from '../Nav/Nav'
import ArtistArea from '../ArtistArea/ArtistArea'
import Loading from '../../components/Loading/Loading';

export class App extends Component {

  componentDidMount() {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    if (favorites !== null) {
      this.props.populateFavorites(favorites)
    }
  }

  getRouteForGenre = ({match}) =>{
    return (
      <ArtistArea match={match} />
    )
  }

  render() {
    const { hasErrored } = this.props
    switch (hasErrored) {
      case '':
        return (
          <div className="App">
            <Nav />
            <Switch>
              <Route exact path='/' component={Instructions} />
              <Route path='/glitchHop' render={this.getRouteForGenre} />
              <Route path='/deepHouse' render={this.getRouteForGenre} />
              <Route path='/futureBass' render={this.getRouteForGenre} />
              <Route path='/trap' render={this.getRouteForGenre} />
              <Route path='/favorites' render={this.getRouteForGenre} />
              <Route component={NotFound} />
            </Switch>
          </div>
        );
      default:
        return (
          <ErrorMsg message={hasErrored} />
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
  populateFavorites: (artists) => dispatch(populateFavorites(artists))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  deepHouse: PropTypes.array,
  glitchHop: PropTypes.array,
  trap: PropTypes.array,
  futureBass: PropTypes.array,
  hasErrored: PropTypes.string,
  populateFavorites: PropTypes.func,
}

App.defaultProps = {
  deepHouse: [],
  glitchHop: [],
  trap: [],
  futureBass: [],
  hasErrored: '',
}