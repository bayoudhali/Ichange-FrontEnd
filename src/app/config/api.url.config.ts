const BASE = 'http://localhost';
const PORT = 8080;
const PATH = '/api';

export const API_URLS={
  Pubs_Url: BASE + ':' + PORT + PATH + '/pub',
  USER_URL: BASE + ':' + PORT + PATH + '/user',
  USER_CRUD_URL: BASE + ':' + PORT + PATH + '/crud_user'

};
