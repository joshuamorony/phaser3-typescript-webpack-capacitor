import axios from 'axios'
import { backendBasePath } from './basePath'

axios.defaults.withCredentials = true

const api = (port, name, params?) => axios.post(`${backendBasePath}:${port}${name}`, params);
export default api;