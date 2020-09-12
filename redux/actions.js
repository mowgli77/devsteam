import {getPhotosAPI} from '../API/api'
import {GET_MORE_PHOTOS, GET_PHOTO_TITLE, GET_PHOTOS, IS_REFRESHING, SET_CURRENT_PAGE, SHOW_ALERT} from "./types";

export const getPhotos = (payload) => ({type: GET_PHOTOS, payload})
export const getMorePhotos = (payload) => ({type: GET_MORE_PHOTOS, payload})
export const setCurrentPage = (payload) => ({type: SET_CURRENT_PAGE, payload})
export const getPhotoTitle = (payload) => ({type: GET_PHOTO_TITLE, payload})
export const setRefreshing = (payload) => ({type: IS_REFRESHING, payload})
export const showAlert = (payload) => ({type: SHOW_ALERT, payload})


export const getPhotosThunk = (page = 1, per_page = 10, order_by = 'latest') => async (dispatch) => {
    try {
        dispatch(setRefreshing(true))
        let result = await getPhotosAPI(page, per_page, order_by)
        dispatch(getPhotos(result.data))
        dispatch(setRefreshing(false))
    } catch (e) {
        dispatch(setRefreshing(false))
        dispatch(showAlert({status: e.response.status, errorMessage: e.response.data.errors[0]}))
    }
}
export const getMorePhotosThunk = (page, per_page = 10, order_by = 'latest') => async (dispatch) => {
    try {
        dispatch(setRefreshing(true))
        let result = await getPhotosAPI(page, per_page, order_by)
        dispatch(getMorePhotos(result.data))
        dispatch(setCurrentPage(page))
        dispatch(setRefreshing(false))
    } catch (e) {
        dispatch(setRefreshing(false))
        dispatch(showAlert({status: e.response.status, errorMessage: e.response.data.errors[0]}))
    }
}