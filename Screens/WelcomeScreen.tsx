import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MainNavigator from '../Navigators/MainNavigator';

export default function WelcomeScreen({navigation}:any) {
    return (
        <View style={styles.container}>
            <Text style={styles.bold}>PABLO BEJARANO</Text>
            <Image source={{uri: 'https://i.pinimg.com/originals/b4/28/e1/b428e167be9f5f9022575b3dab7c459c.jpg'}} style={styles.img}/>
            <Button title='INGRESAR' onPress={() => navigation.navigate('Tabs')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor:'#fae1dd'
    },
    img:{
        width:'100%',
        height: '50%',
        marginBottom: 20 
    },
    bold:{
        fontWeight:'bold',
        fontSize:34
    }
})