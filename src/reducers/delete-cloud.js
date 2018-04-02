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

export default function deleteCloud(state = initialState, action) {
  switch (action.type) {
    case 'DELETE_CLOUD_REQUEST':
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case 'DELETE_CLOUD_SUCCESS':
      return Object.assign({}, state, {
        clouds: action.clouds,
        view: 'library'
      })
    case 'DELETE_CLOUD_ERROR':
      return Object.assign({}, state, {
        error:action.error,
        loading: false
      })
    default: return state;
  }
}