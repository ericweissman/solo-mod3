export const mockPropsEmpty = {
  glitchHop: [],
  trap: [],
  deepHouse: [],
  futureBass: [],
  isLoading: false,
  favorites: [],
  fetchArtists: jest.fn()
}
export const mockPropsFetchedNoFaves = {
  glitchHop: [{ name: 'test', id: '1234', wiki: 'asfas', favorited: false }],
  trap: [{ name: 'test', id: '22', wiki: 'asfas', favorited: false }],
  deepHouse: [{ name: 'test', id: '33', wiki: 'asfas', favorited: false }],
  futureBass: [{ name: 'test', id: '44', wiki: 'asfas', favorited: false }],
  isLoading: false,
  favorites: [],
  match: { path: '/glitchHop' },
  fetchArtists: jest.fn()
}
export const mockPropsFetchedWithFaves = {
  glitchHop: [{ name: 'test', id: '1234', wiki: 'asfas', favorited: false }],
  trap: [{ name: 'test', id: '22', wiki: 'asfas', favorited: false }],
  deepHouse: [{ name: 'test', id: '33', wiki: 'asfas', favorited: false }],
  futureBass: [{ name: 'test', id: '44', wiki: 'asfas', favorited: false }],
  isLoading: false,
  favorites: ['1234'],
  match: { path: '/glitchHop' },
  fetchArtists: jest.fn()
}
export const glitchHop = {
  glitchHop: [{ name: 'test', id: '1234', wiki: 'asfas', favorited: false }],
  trap: [{ name: 'test', id: '22', wiki: 'asfas', favorited: false }],
  deepHouse: [{ name: 'test', id: '33', wiki: 'asfas', favorited: false }],
  futureBass: [{ name: 'test', id: '44', wiki: 'asfas', favorited: false }],
  isLoading: false,
  favorites: ['1234'],
  match: { path: '/glitchHop' },
  fetchArtists: jest.fn()
}
export const deepHouse = {
  glitchHop: [{ name: 'test', id: '1234', wiki: 'asfas', favorited: false }],
  trap: [{ name: 'test', id: '22', wiki: 'asfas', favorited: false }],
  deepHouse: [{ name: 'test', id: '33', wiki: 'asfas', favorited: false }],
  futureBass: [{ name: 'test', id: '44', wiki: 'asfas', favorited: false }],
  isLoading: false,
  favorites: ['1234'],
  match: { path: '/deepHouse' },
  fetchArtists: jest.fn()
}
export const futureBass = {
  glitchHop: [{ name: 'test', id: '1234', wiki: 'asfas', favorited: false }],
  trap: [{ name: 'test', id: '22', wiki: 'asfas', favorited: false }],
  deepHouse: [{ name: 'test', id: '33', wiki: 'asfas', favorited: false }],
  futureBass: [{ name: 'test', id: '44', wiki: 'asfas', favorited: false }],
  isLoading: false,
  favorites: ['1234'],
  match: { path: '/futureBass' },
  fetchArtists: jest.fn()
}
export const trap = {
  glitchHop: [{ name: 'test', id: '1234', wiki: 'asfas', favorited: false }],
  trap: [{ name: 'test', id: '22', wiki: 'asfas', favorited: false }],
  deepHouse: [{ name: 'test', id: '33', wiki: 'asfas', favorited: false }],
  futureBass: [{ name: 'test', id: '44', wiki: 'asfas', favorited: false }],
  isLoading: false,
  favorites: ['1234'],
  match: { path: '/trap' },
  fetchArtists: jest.fn()
}
export const favorites = {
  glitchHop: [{ name: 'test', id: '1234', wiki: 'asfas', favorited: false }],
  trap: [{ name: 'test', id: '22', wiki: 'asfas', favorited: false }],
  deepHouse: [{ name: 'test', id: '33', wiki: 'asfas', favorited: false }],
  futureBass: [{ name: 'test', id: '44', wiki: 'asfas', favorited: false }],
  isLoading: false,
  favorites: ['1234'],
  match: { path: '/favorites' },
  fetchArtists: jest.fn()
}

export const emptyGH = {
  glitchHop: [],
  trap: [{ name: 'test', id: '22', wiki: 'asfas', favorited: false }],
  deepHouse: [{ name: 'test', id: '33', wiki: 'asfas', favorited: false }],
  futureBass: [{ name: 'test', id: '44', wiki: 'asfas', favorited: false }],
  isLoading: false,
  favorites: ['1234'],
  match: { path: '/glitchHop' },
  fetchArtists: jest.fn()
}
export const emptyTrap = {
  glitchHop: [],
  trap: [],
  deepHouse: [{ name: 'test', id: '33', wiki: 'asfas', favorited: false }],
  futureBass: [{ name: 'test', id: '44', wiki: 'asfas', favorited: false }],
  isLoading: false,
  favorites: ['1234'],
  match: { path: '/trap' },
  fetchArtists: jest.fn()
}
export const emptyDH = {
  glitchHop: [],
  trap: [],
  deepHouse: [{ name: 'test', id: '33', wiki: 'asfas', favorited: false }],
  futureBass: [{ name: 'test', id: '44', wiki: 'asfas', favorited: false }],
  isLoading: false,
  favorites: ['1234'],
  match: { path: '/trap' },
  fetchArtists: jest.fn()
}
export const emptyFB = {
  glitchHop: [],
  trap: [],
  deepHouse: [{ name: 'test', id: '33', wiki: 'asfas', favorited: false }],
  futureBass: [{ name: 'test', id: '44', wiki: 'asfas', favorited: false }],
  isLoading: false,
  favorites: ['1234'],
  match: { path: '/trap' },
  fetchArtists: jest.fn()
}
export const emptyPath = {
  glitchHop: [],
  trap: [],
  deepHouse: [{ name: 'test', id: '33', wiki: 'asfas', favorited: false }],
  futureBass: [{ name: 'test', id: '44', wiki: 'asfas', favorited: false }],
  isLoading: false,
  favorites: ['1234'],
  match: { path: '' },
  fetchArtists: jest.fn()
}