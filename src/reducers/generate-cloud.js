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

export const generateCloud = (state = initialState, action) => {
  switch (action.type) {
    case 'GENERATE_CLOUD_REQUEST':
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case 'GENERATE_CLOUD_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        error: null,
        activeCloud: {
          id: action.id,
          title: action.title,
          text: action.text,
          words: action.words,
          font: action.font,
          color: action.color
          },
          view: 'cloudEdit'
      })
    case 'GENERATE_CLOUD_ERROR':
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    default: return state;
  }
}