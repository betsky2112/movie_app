import { API_ACCESS_TOKEN, API_URL } from '@env'
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const MovieDetail = ({ navigation }: any): any => {
    const fetchData = (): void => {
        if (API_URL == null || API_ACCESS_TOKEN.length == null) {
            throw new Error('ENV not found')
        }

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_ACCESS_TOKEN}`,
            },
        }

        fetch(API_URL, options)
            .then(async (response) => await response.json())
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <View style={styles.container}>
            <Text>Movie Detail Page</Text>
            <Button
                title="Fetch Data"
                onPress={() => {
                    fetchData()
                }}
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
