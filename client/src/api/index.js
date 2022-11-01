import axios from 'axios';

const getRouteUrl = (hostname, port, route) => 'http://'+hostname+':'+String(port)+route;

export const fetchPosts = () => axios.get(getRouteUrl('localhost', 5000, '/posts'));