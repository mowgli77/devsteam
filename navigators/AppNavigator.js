import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {HomeScreen, PhotoScreen} from "../screens"
import {useSelector} from "react-redux";
import {getPhotoTitleSelector} from "../redux/selectors";

const Stack = createStackNavigator();


export default function AppNavigator() {

    const title = useSelector(getPhotoTitleSelector)

    const options = (title, padding, size) => ({
        title: title,
        headerStyle: {
            backgroundColor: '#343232',
            height: 60,
            elevation: 0,
            shadowOpacity: 0
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: size,
            paddingLeft: padding
        },
    })


    return <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={options('Gallery', 24, 20)}/>
        <Stack.Screen name="Photo" component={PhotoScreen} options={options(title, 0, 14)}/>
    </Stack.Navigator>
}