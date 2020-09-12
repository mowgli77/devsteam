import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {galleryReducer} from "./galleryReducer";


const rootReducer = combineReducers({
    gallery: galleryReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store