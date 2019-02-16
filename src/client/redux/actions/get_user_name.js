import request from '@/utils/request'
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
        return request.get('/api/user').then(res => {
            dispatch(updateUserName(res.data.username))
        })
    }
}