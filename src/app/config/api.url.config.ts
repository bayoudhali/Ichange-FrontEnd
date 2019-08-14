const BASE = 'http://localhost';
const PORT = 8080;
const PATH = '/api';

export const API_URLS={
  USER_URL: BASE + ':' + PORT + PATH + '/user',
  USER_CRUD_URL: BASE + ':' + PORT + PATH + '/crud_user',
  ALL_USER_URL: BASE + ':' + PORT + PATH + '/crud_user/GetAllUser',
  COUNT_USER_URL: BASE + ':' + PORT + PATH + '/crud_user/All',
  PUBS_URL: BASE + ':' + PORT + PATH + '/pubs',
  COUNT_PUBS_URL: BASE + ':' + PORT + PATH + '/pubs/All',
  GET_PUBS_URL: BASE + ':' + PORT + PATH + '/pubs/GetAllPubs',
  GET_ONE_PUB: BASE + ':' + PORT + PATH + '/pubs/one',
  UPDATE_STATUS_PUBS_URL: BASE + ':' + PORT + PATH + '/pubs/status',
  GET_COMMENTS_URL: BASE + ':' + PORT + PATH + '/comments/GetAllComments',
  ADD_COMMENTS_URL: BASE + ':' + PORT + PATH + '/comments',
  GET_ONE_COMMENT: BASE + ':' + PORT + PATH + '/comments/one',
  COUNT_COMMENTS_URL: BASE + ':' + PORT + PATH + '/comments/All'
};
