import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const MovieDetail = ({ navigation }: any): any => {
    const fetchData = (): void => {
        const ACCESS_TOKEN =
            'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDc4NTgyODk2YzRlNzk5NDZhOTNlNDJhMzcyMDY1ZSIsInN1YiI6IjY2NjkxOGFlYTdmNzVmZDVhODFjNWQ3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hJlOpPNJmWULMSpH9TRobZNJ5o0-398iDnf9VIDOP3I'
        const url =
            'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        }

        fetch(url, options)
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
