import React, {Component} from 'react'
import YouTube from 'react-youtube';
import { connect } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../../actions'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorited: false,
    }
  }
  handleFavorite = (e) => {
    const { name, id, wiki } = this.props.artist
    const { favorited } = this.state
    e.preventDefault();
    if (!favorited) {
      this.props.addToFavorites({name, id, wiki})
    } else {
      this.props.removeFromFavorites(id)
    }
    this.setState({
      favorited: !this.state.favorited,
    }, () => localStorage.setItem('favorites', JSON.stringify(this.props.favorites)) )
  }
  
  render() {
    const { name, id, wiki } = this.props.artist
    return (
      <div>
        <h4>{name}</h4>
        <YouTube
          videoId={id}
          title={name}
        />
        <a href={wiki} target='blank'>More Info</a>
        <button onClick={this.handleFavorite}>Add to favorites</button>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  favorites: state.favorites,
})

export const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (artist) => dispatch(addToFavorites(artist)),
  removeFromFavorites: (id) => dispatch(removeFromFavorites(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)