import React, { Component } from 'react'
import YouTube from 'react-youtube';
import { connect } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../../actions'

export class Card extends Component {
  handleFavorite = (e) => {
    const { artist, favorites } = this.props
    const { favorited } = this.props.artist
    e.preventDefault();
    let updatedFavorites
    if (!favorited) {
      
      this.props.addToFavorites(artist)
      updatedFavorites = [...favorites, artist]
    } else if (favorited) {
      this.props.removeFromFavorites(artist)
      updatedFavorites = favorites.filter(favorite => favorite.id !== artist.id)
    }
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  render() {
    const { name, id, wiki, favorited } = this.props.artist
    const opts = {
      height: '152',
      width: '270'
    }

    return (
      <div className='card'>
        <h4>{name}</h4>
        <YouTube
          className='video'
          videoId={id}
          title={name}
          opts={opts}
        />
        <a href={wiki} target='blank'> <i class="fas fa-info-circle"></i>More Info</a>
        {
          favorited ?
            <button className='favorites' onClick={this.handleFavorite}><i class="fas fa-times-circle"></i>Remove from Favorites</button> :
            <button className='favorites' onClick={this.handleFavorite}><i class="fas fa-plus-circle"></i>Add to Favorites</button>
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