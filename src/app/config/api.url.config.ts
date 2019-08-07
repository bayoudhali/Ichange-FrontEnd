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
  GET_COMMENTS_URL: BASE + ':' + PORT + PATH + '/comments/GetAllComments',
  ADD_COMMENTS_URL: BASE + ':' + PORT + PATH + '/comments',
  COUNT_COMMENTS_URL: BASE + ':' + PORT + PATH + '/comments/All'
};
