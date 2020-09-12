import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {getPhotoTitle} from "../redux/actions";
import {useDispatch} from "react-redux";
import {W} from "../constants/constants";

const GalleryItem = ({urls, description, alt_description, id, user: {name}, navigation}) => {

    const {container, subContainer, img, textBlock, nameText, descriptionText} = styles

    const dispatch = useDispatch()

    const goToPhoto = () => {
        navigation.navigate('Photo', {source: urls.regular})
        dispatch(getPhotoTitle(id))
    }

    return (
        <TouchableOpacity style={container}
                          onPress={goToPhoto}>
            <View style={subContainer}>
                <Image style={img} source={{uri: urls.thumb}}/>
                <View style={textBlock}>
                    <Text style={nameText}>{name}</Text>
                    <Text style={descriptionText}>{description ? description : alt_description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default GalleryItem

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: W*0.49,
        alignItems: 'center',
        marginBottom: W*0.02,
    },
    subContainer: {
        width: W*0.46,
        borderRadius: 4,
        overflow: 'hidden',
    },
    img: {
        width: W*0.46,
        height: W*0.46
    },
    textBlock: {
        backgroundColor: '#343232',
        width: W*0.46,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 68,
        overflow: 'hidden',
        paddingHorizontal: 3
    },
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    descriptionText: {
        fontSize: 12,
        color: '#fff',
        textAlign: 'center'
    }
})