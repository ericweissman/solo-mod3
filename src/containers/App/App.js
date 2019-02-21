import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import '../../styles/index.scss'
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

export default App;
