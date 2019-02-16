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
        return axios.get('http://localhost:3000/api/user').then(res => {
            dispatch(updateUserName(res.data.username))
        })
    }
}