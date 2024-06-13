import { API_ACCESS_TOKEN, API_URL } from '@env'
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const MovieDetail = ({ route }: any): JSX.Element => {
    const { id } = route.params

    return (
        <View
            style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 32,
            }}
        >
            <Text style={{ fontSize: 30 }}>Movie ID: {id}</Text>
        </View>
    )
}

export default MovieDetail
