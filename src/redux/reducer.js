import { combineReducers } from 'redux';
import articles from './reducers/articles';
import authUser from './reducers/authUser';
import common from './reducers/common';
import { reactReducer } from 'react-router-redux';

export default combineReducers({
  articles,
  authUser,
  common,
  router: reactReducer
});