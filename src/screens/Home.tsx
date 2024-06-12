import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

const Home = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text>Movie Page</Text>
            <Button
                title="PERGI KE MOVIEDETAIL"
                onPress={() => navigation.navigate('MovieDetail')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Home