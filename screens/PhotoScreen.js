import React from 'react'
import {Image, StyleSheet, View} from 'react-native'


const PhotoScreen = ({route}) => {

    return (
        <View style={styles.container}>
            <Image style={styles.img}
                   source={{uri: route.params.source}}/>
        </View>
    );
}

export default PhotoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    img: {
        ...StyleSheet.absoluteFill
    }
})

