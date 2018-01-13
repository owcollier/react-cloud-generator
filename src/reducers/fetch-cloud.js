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

export const fetchCloud = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CLOUDS_REQUEST':
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case 'FETCH_CLOUDS_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        error: null,
        clouds: action.clouds,
        view: 'library',
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
    case 'FETCH_CLOUDS_ERROR':
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    case 'FETCH_SINGLE_CLOUD_REQUEST':
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case 'FETCH_SINGLE_CLOUD_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        error: null,
        activeCloud: action.activeCloud,
        view: 'focus'
      })
    case 'FETCH_SINGLE_CLOUD_ERROR':
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    default: return state;
  }
}

// else if(action.type === FETCH_CLOUDS_REQUEST){
//   return Object.assign({}, state, {
//     loading: true,
//     error: null
//   })
// }
// else if(action.type === FETCH_CLOUDS_SUCCESS){
//   return Object.assign({}, state, {
//     loading: false,
//     error: null,
//     clouds: action.clouds,
//     view: 'library',
//     activeCloud: {
//       title: '',
//       text: '',
//       words: [],
//       font: 'sans-serif',
//       color: 'random',
//       upvotes: 0,
//       downvotes: 0
//     }
//   })
// }
// else if(action.type === FETCH_CLOUDS_ERROR){
//   return Object.assign({}, state, {
//     error: action.error,
//     loading: false
//   })
// }
// else if(action.type === FETCH_SINGLE_CLOUD_REQUEST){
//   return Object.assign({}, state, {
//     loading: true,
//     error: null
//   })
// }
// else if(action.type === FETCH_SINGLE_CLOUD_SUCCESS){
//   return Object.assign({}, state, {
//     loading: false,
//     error: null,
//     activeCloud: action.activeCloud,
//     view: 'focus'
//   })
// }
// else if(action.type === FETCH_SINGLE_CLOUD_ERROR){
//   return Object.assign({}, state, {
//     error: action.error,
//     loading: false
//   })
// }