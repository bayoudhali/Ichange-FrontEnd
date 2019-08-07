const BASE = 'http://localhost';
const PORT = 8080;
const PATH = '/api';

export const API_URLS={
  USER_URL: BASE + ':' + PORT + PATH + '/user',
  USER_CRUD_URL: BASE + ':' + PORT + PATH + '/crud_user',
  PUBS_URL: BASE + ':' + PORT + PATH + '/pubs',
  GET_PUBS_URL: BASE + ':' + PORT + PATH + '/pubs/GetAllPubs',
  GET_COMMENTS_URL: BASE + ':' + PORT + PATH + '/comments/GetAllComments',
  ADD_COMMENTS_URL: BASE + ':' + PORT + PATH + '/comments'
};
