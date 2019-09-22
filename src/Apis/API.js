import axios from 'axios';

const URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyDxxPFogL4JlqK0NRzt3X0t7lpMJ6LKpjk';

export default class SearchAPI {
    // static searchBooks = async query => {
        // const params = {
        //     q : query,
        //     key : API_KEY
        // }
        // await axios.get(`${URL}`, params);
    // }
    static searchBooks = async query => await axios.get(`${URL}?q=${query}&key=${API_KEY}`);
};