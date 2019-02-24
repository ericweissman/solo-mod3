import React, { Component } from 'react'
import YouTube from 'react-youtube';
import { connect } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../../actions'

class Card extends Component {
  handleFavorite = (e) => {
    const { artist, favorites } = this.props
    const { favorited } = this.props.artist
    e.preventDefault();
    let updatedFavorites
    if (!favorited) {
      this.props.addToFavorites(artist)
      updatedFavorites = [...favorites, artist.id]
    } else if (favorited) {
      this.props.removeFromFavorites(artist)
      updatedFavorites = favorites.filter(id => id !== artist.id)
    }
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  render() {
    const { name, id, wiki, favorited } = this.props.artist
    return (
      <div>
        <h4>{name}</h4>
        <YouTube
          videoId={id}
          title={name}
        />
        <a href={wiki} target='blank'>More Info</a>
        {
          favorited ?
            <button onClick={this.handleFavorite}>Delete from favorites</button> :
            <button onClick={this.handleFavorite}>Add to Favorites</button>
        }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  favorites: state.favorites,
})

export const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (artist) => dispatch(addToFavorites(artist)),
  removeFromFavorites: (artist) => dispatch(removeFromFavorites(artist))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)