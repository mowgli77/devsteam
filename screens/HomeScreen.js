import React, {useEffect} from 'react'
import {FlatList, RefreshControl, StyleSheet, View, Alert} from 'react-native'
import {GalleryItem} from "../components"
import {getMorePhotosThunk, getPhotosThunk, setCurrentPage, showAlert} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPageSelector, getErrorMessageSelector,
    getPageSizeSelector,
    getPhotosSelector,
    getRefreshingSelector, getStatusSelector
} from "../redux/selectors";
import {W} from "../constants/constants";


const HomeScreen = ({navigation}) => {

    const photos = useSelector(getPhotosSelector)
    const currentPage = useSelector(getCurrentPageSelector)
    const pageSize = useSelector(getPageSizeSelector)
    const status = useSelector(getStatusSelector)
    const errorMessage = useSelector(getErrorMessageSelector)
    const isRefreshing = useSelector(getRefreshingSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPhotosThunk(1, pageSize))
        dispatch(setCurrentPage((1)))
    }, [])

   status && errorMessage && Alert.alert(
        `Error ${status}`,
        `${errorMessage}`,
        [
            {
                text: null,
                onPress: () => dispatch(showAlert('', '')),
            },
            {
                text: 'Ok',
                onPress: () => dispatch(showAlert('', '')),
                style: 'cancel'
            }
        ]
    )

    return (
        <View style={styles.container}>
            <FlatList numColumns={'2'}
                      keyExtractor={item => item.id}
                      data={photos}
                      onEndReachedThreshold={0.5}
                      onEndReached={() => dispatch(getMorePhotosThunk(currentPage + 1, pageSize))}
                      renderItem={({item}) => <GalleryItem {...item} navigation={navigation}/>}
                      refreshControl={
                          <RefreshControl refreshing={isRefreshing} onRefresh={() => dispatch(getPhotosThunk(1, pageSize))}/>
                      }
            />
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: W*0.02,
        paddingHorizontal: W*0.01
    }
})

