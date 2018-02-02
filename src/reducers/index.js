import fetchCloud from './fetch-cloud';
import generateCloud from './generate-cloud';
import updateCloud from './update-cloud';
import deleteCloud from './delete-cloud';
import nav from './nav';
import vote from './vote';

export default combineReducers({
  fetchCloud,
  generateCloud,
  updateCloud,
  deleteCloud,
  nav,
  vote
})