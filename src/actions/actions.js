import {API_BASE_URL} from '../config';

export const FETCH_CLOUDS_REQUEST = 'FETCH_CLOUDS_REQUEST';
export const fetchCloudsRequest = () => ({
  type: FETCH_CLOUDS_REQUEST,
})

export const FETCH_CLOUDS_SUCCESS = 'FETCH_CLOUDS_SUCCESS';
export const fetchCloudsSuccess = (clouds) => ({
  type: FETCH_CLOUDS_SUCCESS,
  clouds
})

export const FETCH_CLOUDS_ERROR = 'FETCH_CLOUDS_ERROR';
export const fetchCloudsError = (error) => ({
  type: FETCH_CLOUDS_ERROR,
  error
})

export const FETCH_SINGLE_CLOUD_REQUEST = 'FETCH_SINGLE_CLOUD_REQUEST';
export const fetchSingleCloudRequest = () => ({
  type: FETCH_SINGLE_CLOUD_REQUEST,
})

export const FETCH_SINGLE_CLOUD_SUCCESS = 'FETCH_SINGLE_CLOUD_SUCCESS';
export const fetchSingleCloudSuccess = (activeCloud) => ({
  type: FETCH_SINGLE_CLOUD_SUCCESS,
  activeCloud
})

export const FETCH_SINGLE_CLOUD_ERROR = 'FETCH_SINGLE_CLOUD_ERROR';
export const fetchSingleCloudError = (error) => ({
  type: FETCH_SINGLE_CLOUD_ERROR,
  error
})

export const GENERATE_CLOUD_REQUEST = 'GENERATE_CLOUD_REQUEST';
export const generateCloudRequest = () => ({
  type: GENERATE_CLOUD_REQUEST
})

export const GENERATE_CLOUD_SUCCESS = 'GENERATE_CLOUD_SUCCESS';
export const generateCloudSuccess =  (id, title, text, words, font, color) => ({  
  type: GENERATE_CLOUD_SUCCESS,
  id,
  title,
  text,
  words,
  font,
  color
});

export const GENERATE_CLOUD_ERROR = 'GENERATE_CLOUD_ERROR';
export const generateCloudError = (error) => ({
  type: GENERATE_CLOUD_ERROR,
  error
})

export const UPDATE_CLOUD_REQUEST = 'UPDATE_CLOUD_REQUEST';
export const updateCloudRequest = () => ({
  type: UPDATE_CLOUD_REQUEST
})

export const UPDATE_CLOUD_SUCCESS = 'UPDATE_CLOUD_SUCCESS';
export const updateCloudSuccess =  (data) => {
  console.log('Made it to update cloud success');
  return {
    type: UPDATE_CLOUD_SUCCESS,
    id: data._id,
    title: data.title,
    text: data.text,
    words: data.words,
    font: data.font,
    color: data.color
  }
};

export const UPDATE_CLOUD_ERROR = 'UPDATE_CLOUD_ERROR';
export const updateCloudError = (error) => ({
  type: UPDATE_CLOUD_ERROR,
  error
})

export const DELETE_CLOUD_REQUEST = 'DELETE_CLOUD_REQUEST';
export const deleteCloudRequest = () => ({
  type: DELETE_CLOUD_REQUEST
})

export const DELETE_CLOUD_SUCCESS = 'DELETE_CLOUD_SUCCESS';
export const deleteCloudSuccess =  (clouds) => ({  
  type: DELETE_CLOUD_SUCCESS,
  clouds
});

export const DELETE_CLOUD_ERROR = 'DELETE_CLOUD_ERROR';
export const deleteCloudError = (error) => ({
  type: DELETE_CLOUD_ERROR,
  error
})

export const GO_HOME = 'GO_HOME';
export const goHome = () => ({
  type:GO_HOME
})

export const GO_EDIT = 'GO_EDIT';
export const goEdit = () => ({
  type:GO_EDIT
})

export const UP_VOTE_REQUEST = 'UP_VOTE_REQUEST';
export const upVoteRequest = () => ({
  type: UP_VOTE_REQUEST
})

export const UP_VOTE_SUCCESS = 'UP_VOTE_SUCCESS';
export const upVoteSuccess = (upvotes) => ({
  type:UP_VOTE_SUCCESS,
  upvotes
})

export const UP_VOTE_ERROR = 'UP_VOTE_ERROR';
export const upVoteError = (error) => ({
  type: UP_VOTE_ERROR,
  error
})

export const DOWN_VOTE_REQUEST = 'DOWN_VOTE_REQUEST';
export const downVoteRequest = () => ({
  type: DOWN_VOTE_REQUEST
})

export const DOWN_VOTE_SUCCESS = 'DOWN_VOTE_SUCCESS';
export const downVoteSuccess = (downvotes) => ({
  type:DOWN_VOTE_SUCCESS,
  downvotes
})

export const DOWN_VOTE_ERROR = 'DOWN_VOTE_ERROR';
export const downVoteError = (error) => ({
  type: DOWN_VOTE_ERROR,
  error
})

export const fetchClouds = () => dispatch => {
  dispatch(fetchCloudsRequest());
  return fetch(`${API_BASE_URL}/clouds`)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusTest)
      }
      return res.json();
    }).then(data => 
        dispatch(fetchCloudsSuccess(data))
    ).catch(err =>
        dispatch(fetchCloudsError(err)) 
    );
}

export const fetchSingleCloud = (id) => dispatch => {
  dispatch(fetchSingleCloudRequest());
  return fetch(`${API_BASE_URL}/clouds/${id}`)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusTest);
      }
      return res.json();
    }).then(data =>
        dispatch(fetchSingleCloudSuccess(data))
    ).catch(err =>
        dispatch(fetchSingleCloudError(err))
    );
}

export const addCloud = (title, text, words, font, color) => dispatch => {
  dispatch(generateCloudRequest());
  return fetch(`${API_BASE_URL}/clouds`, {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    method: `POST`,
    body: JSON.stringify({
      title,
      text,
      words,
      font,
      color
    })
  })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusTest)
      }
      return res.json();
    }).then(data => 
        dispatch(generateCloudSuccess(data.id, data.title, data.text, data.words, data.font, data.color))
      ).catch(err => 
        dispatch(generateCloudError(err))
      );
}

export const upVoteCloud = (id, upvotes) => dispatch => {
  dispatch(upVoteRequest());
  return fetch(`${API_BASE_URL}/clouds/${id}/upvote`, {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    method: `PUT`,
    body: JSON.stringify({
      id,
      upvotes
    })
  })
  .then(res => {
    console.log(res);
    return res.json();
  }).then(data => {
    console.log('upvote data:', data)
      dispatch(upVoteSuccess(data.upvotes));
      dispatch(fetchSingleCloud(data._id))}
    ).catch(err => {
      console.log(err)
      dispatch(upVoteError(err))}
    );
}

export const downVoteCloud = (id, downvotes) => dispatch => {
  dispatch(downVoteRequest());
  return fetch(`${API_BASE_URL}/clouds/${id}/downvote`, {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    method: `PUT`,
    body: JSON.stringify({
      id,
      downvotes
    })
  })
  .then(res => {
    if(!res.ok) {
      throw new Error(res.statusTest)
    }
    return res.json();
  }).then(data => {
      dispatch(downVoteSuccess(data.downvotes));
      dispatch(fetchSingleCloud(data._id))}
    ).catch(err => 
      dispatch(downVoteError(err))
    );
}

export const updateCloud = (id, title, text, words, font, color) => dispatch => {
  dispatch(updateCloudRequest());
  return fetch(`${API_BASE_URL}/clouds/${id}`, {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    method: `PUT`,
    body: JSON.stringify({
      id,
      title,
      text,
      words,
      font,
      color
    })
  }).then(res => {
      if(!res.ok) {
        throw new Error(res.statusTest)
      }
      return res.json();
    }).then(function(data) {
      return dispatch(updateCloudSuccess(data))
    }).catch(err => 
        dispatch(updateCloudError(err))
      );
}

export const removeCloud = (id) => dispatch => {
  dispatch(deleteCloudRequest());
  return fetch(`${API_BASE_URL}/clouds/${id}`, {
    method: `DELETE`
  })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusTest)
      }
      dispatch(fetchClouds());
    }).catch(err => 
        dispatch(deleteCloudError(err))
      );
}

// .then(data => 
//   dispatch(deleteCloudSuccess(data))
// )
