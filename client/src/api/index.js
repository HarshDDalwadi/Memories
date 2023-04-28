import axios from 'axios';

const url = "http://192.168.59.1:3001/posts";

export const fetchPosts = () => axios.get(url);