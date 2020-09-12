export const getPhotosSelector = state => state.gallery.photos
export const getPhotoTitleSelector = state => state.gallery.title
export const getCurrentPageSelector = state => state.gallery.currentPage
export const getPageSizeSelector = state => state.gallery.pageSize
export const getRefreshingSelector = state => state.gallery.isRefreshing
export const getStatusSelector = state => state.gallery.status
export const getErrorMessageSelector = state => state.gallery.errorMessage