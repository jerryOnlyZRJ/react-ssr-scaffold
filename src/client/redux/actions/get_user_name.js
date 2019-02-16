import axios from 'axios'
import {
    ActionTypes
} from '../constants'

const updateUserName = (username) => ({
    type: ActionTypes.GET_USER_NAME,
    payload: {
        username
    }
})

export default {
    getUserName: () => dispatch => {
        const url = typeof window !== 'undefined' ? '/api/user' : 'http://localhost:3000/api/user'
        return axios.get(url).then(res => {
            dispatch(updateUserName(res.data.username))
        })
    }
}