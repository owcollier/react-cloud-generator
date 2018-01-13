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

export const reducer = (state = initialState, action) => {
  if(action.type === GO_HOME){
    return Object.assign({}, state, {
      view: 'home',
      activeCloud: {
        title: '',
        text: '',
        words: [],
        font: 'sans-serif',
        color: 'random',
        upvotes: 0,
        downvotes: 0
      }
    })
  }
  else if(action.type === GO_EDIT){
    return Object.assign({}, state, {
      view: "cloudEdit"
    })
  }
  return state;
};