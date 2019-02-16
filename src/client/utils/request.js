import axios from 'axios'

const baseURL = typeof window === 'undefined' ? 'http://localhost:3000/' : '/'
 
export default axios.create({
    baseURL
})