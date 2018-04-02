import {
  FETCH_CLOUDS_REQUEST,
  FETCH_CLOUDS_SUCCESS,
  FETCH_CLOUDS_ERROR,
  FETCH_SINGLE_CLOUD_REQUEST,
  FETCH_SINGLE_CLOUD_SUCCESS,
  FETCH_SINGLE_CLOUD_ERROR,
  GENERATE_CLOUD_REQUEST,
  GENERATE_CLOUD_SUCCESS,
  GENERATE_CLOUD_ERROR,
  UPDATE_CLOUD_REQUEST,
  UPDATE_CLOUD_SUCCESS,
  UPDATE_CLOUD_ERROR,
  DELETE_CLOUD_REQUEST,
  DELETE_CLOUD_SUCCESS,
  DELETE_CLOUD_ERROR,
  GO_HOME,
  GO_EDIT,
  UP_VOTE_REQUEST,
  UP_VOTE_SUCCESS,
  UP_VOTE_ERROR,
  DOWN_VOTE_REQUEST,
  DOWN_VOTE_SUCCESS,
  DOWN_VOTE_ERROR
  } from '../actions/actions';

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
  else if(action.type === UP_VOTE_REQUEST){
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  else if(action.type === UP_VOTE_SUCCESS){
    return Object.assign({}, state, {
      activeCloud: {
        upvotes: action.upvotes
        }
    })
  }
  else if(action.type === UP_VOTE_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  else if(action.type === DOWN_VOTE_REQUEST){
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  else if(action.type === DOWN_VOTE_SUCCESS){
    return Object.assign({}, state, {
      activeCloud: {
        downvotes: action.downvotes
        }
    })
  }
  else if(action.type === DOWN_VOTE_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  else if(action.type === FETCH_CLOUDS_REQUEST){
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  else if(action.type === FETCH_CLOUDS_SUCCESS){
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
  }
  else if(action.type === FETCH_CLOUDS_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  else if(action.type === FETCH_SINGLE_CLOUD_REQUEST){
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  else if(action.type === FETCH_SINGLE_CLOUD_SUCCESS){
    return Object.assign({}, state, {
      loading: false,
      error: null,
      activeCloud: action.activeCloud,
      view: 'focus'
    })
  }
  else if(action.type === FETCH_SINGLE_CLOUD_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  else if(action.type === GENERATE_CLOUD_REQUEST){
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  //might have issues with the activeCloud not resetting
  else if(action.type === GENERATE_CLOUD_SUCCESS){

    return Object.assign({}, state, {
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
  }
  else if(action.type === GENERATE_CLOUD_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  else if(action.type === UPDATE_CLOUD_REQUEST){
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  else if(action.type === UPDATE_CLOUD_SUCCESS){

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
  }
  else if(action.type === UPDATE_CLOUD_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  else if(action.type === DELETE_CLOUD_REQUEST){
    return Object.assign({}, state, {
      loading: false,
      error: null,
    })
  }
  else if(action.type === DELETE_CLOUD_SUCCESS){
    return Object.assign({}, state, {
      clouds: action.clouds,
      view: 'library'
    })
  }
  else if(action.type === DELETE_CLOUD_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  return state;
};