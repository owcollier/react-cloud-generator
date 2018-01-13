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

export const updateCloud = (state= initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CLOUD_REQUEST':
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case 'UPDATE_CLOUD_SUCCESS':
      return Object.assign({}, state, {
        view: 'focus',
        activeCloud: {
          id: action.id,
          title: action.title,
          text: action.text,
          words: action.words,
          font: action.font,
          color: action.color,
        }
      })
    case 'UPDATE_CLOUD_ERROR':
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      })
    default: return state;
  }
}