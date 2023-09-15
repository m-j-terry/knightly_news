import { getToken } from '../utilities/admin-services'

import axios from 'axios';

export async function submit(imageData) {
    return axios.post(`/api/admin/article`, imageData, {
        headers: new Headers({ 
            'Content-Type': "multipart/form-data", 
            'Authorization': `Bearer ${getToken()}`
        })
    })
}