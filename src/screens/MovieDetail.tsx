import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const MovieDetail = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text>Movie Detail Page</Text>
            <Button
                title="KEMBALI"
                onPress={() => navigation.navigate('Home')}
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

export default MovieDetail
