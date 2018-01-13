const initialState = {
  view: 'home',
  clouds: [],
  activeCloud: {
    title: '',
    text: '',
    words: [],
    font: 'sans-serif',
    color: 'random',
    upvotes: 0,
    downvotes: 0
  },
  loading: false,
  error: null
};

export const vote = (state = initialState, action) => {
  switch (action.type) {
    case 'UP_VOTE_REQUEST':
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case 'UP_VOTE_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        activeCloud: {
          upvotes: action.upvotes
          }
      })
    case 'UP_VOTE_ERROR':
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    case 'DOWN_VOTE_REQUEST':
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case 'DOWN_VOTE_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        activeCloud: {
          downvotes: action.downvotes
          }
      })
    case 'DOWN_VOTE_ERROR':
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    default: return state;
  }
}