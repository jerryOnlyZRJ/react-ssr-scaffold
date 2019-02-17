import axios from 'axios'
import CONFIG from '../../config'

// 服务端执行asyncData时，baseUrl不是localhost:3000而是localhost:80，因此要与客户端同步
const baseURL = typeof window === 'undefined' ? `http://localhost:${CONFIG.port}/` : '/'
 
export default axios.create({
    baseURL
})