import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-react-9746f.firebaseio.com'
});

export default instance;
