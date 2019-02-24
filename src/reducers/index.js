import { combineReducers } from 'redux'
import isLoadingReducer from './isLoadingReducer'
import hasErroredReducer from './hasErroredReducer'
import deepHouseReducer from './deepHouseReducer'
import glitchHopReducer from './glitchHopReducer'
import futureBassReducer from './futureBassReducer'
import trapReducer from './trapReducer'
import favoritesReducer from './favoritesReducer'

export const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer,
  deepHouse: deepHouseReducer,
  glitchHop: glitchHopReducer,
  futureBass: futureBassReducer,
  trap: trapReducer,
  favorites: favoritesReducer,
})

export default rootReducer