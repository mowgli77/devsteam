import {GET_MORE_PHOTOS, GET_PHOTO_TITLE, GET_PHOTOS, IS_REFRESHING, SET_CURRENT_PAGE, SHOW_ALERT} from './types'

let initialState = {
    photos: [],
    total_count: null,
    currentPage: 1,
    pageSize: 10,
    title: '',
    isRefreshing: false,
    status: '',
    errorMessage: ''
}

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS:
            return {
                ...state,
                photos: action.payload
            }
        case GET_MORE_PHOTOS:
            return {
                ...state,
                photos: state.photos.concat(action.payload).reduce((uniq, item) => uniq.some(p => p.id === item.id) ? uniq : [ ...uniq, item], [])
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case GET_PHOTO_TITLE:
            return {
                ...state,
                title: state.photos.filter(p => p.id === action.payload)[0].description
                    ? state.photos.filter(p => p.id === action.payload)[0].description
                    : state.photos.filter(p => p.id === action.payload)[0].alt_description
            }
        case IS_REFRESHING:
            return {
                ...state,
                isRefreshing: action.payload
            }
        case SHOW_ALERT:
            return {
                ...state,
                status: action.payload.status,
                errorMessage: action.payload.errorMessage
            }

        default:
            return state;
    }
}
