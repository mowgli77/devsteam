import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.unsplash.com'
})

const client_id = '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043'

export const getPhotosAPI = (page, per_page, order_by) => {
    return instance.get(`/photos?page=${page}&per_page=${per_page}&order_by=${order_by}&client_id=${client_id}`)
}
