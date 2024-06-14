import { API_ACCESS_TOKEN } from '@env'
import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Movie } from '../types/app'
import { LinearGradient } from 'expo-linear-gradient'
import MovieList from '../components/MovieList'

const MovieDetail = ({ route }: any): JSX.Element => {
    const [detailMovie, setDetailMovie] = useState<Movie | null>(null)
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const { id } = route.params

    useEffect(() => {
        getMovieDetail()
    }, [])

    const getMovieDetail = (): void => {
        const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_ACCESS_TOKEN}`,
            },
        }

        fetch(url, options)
            .then(async (response) => await response.json())
            .then((response) => {
                setDetailMovie(response)
            })
            .catch((errorResponse) => {
                console.log(errorResponse)
            })
    }

    if (!detailMovie) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground
                source={{
                    uri: `https://image.tmdb.org/t/p/w500/${detailMovie.backdrop_path}`,
                }}
                style={styles.poster}
            >
                <LinearGradient
                    colors={['#00000000', 'rgba(0, 0, 0, 0.7)']}
                    locations={[0.6, 0.8]}
                    style={styles.gradientStyle}
                >
                    <Text style={styles.movieTitle}>{detailMovie.title}</Text>
                    <View style={styles.ratingContainer}>
                        <FontAwesome name="star" size={14} color="yellow" />
                        <Text style={styles.rating}>
                            {detailMovie.vote_average.toFixed(1)}
                        </Text>
                    </View>
                    <View style={styles.favoriteContainer}>
                        <FontAwesome
                            name={isFavorite ? 'heart' : 'heart-o'} // Ubah ikon berdasarkan status isFavorite
                            size={24}
                            color="pink"
                            onPress={() => setIsFavorite(!isFavorite)} // Toggle status isFavorite
                        />
                    </View>
                </LinearGradient>
            </ImageBackground>
            <Text style={styles.overview}>{detailMovie.overview}</Text>
            <View style={styles.infoContainer}>
                <View style={styles.gridItem}>
                    <Text style={styles.gridItemText}>Original Language</Text>
                    <Text>{detailMovie.original_language}</Text>
                </View>
                <View style={styles.gridItem}>
                    <Text style={styles.gridItemText}>Popularity</Text>
                    <Text>{detailMovie.popularity}</Text>
                </View>
                <View style={styles.gridItem}>
                    <Text style={styles.gridItemText}>Release date</Text>
                    <Text>
                        {new Date(detailMovie.release_date).toLocaleDateString(
                            'en-US',
                            {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                                weekday: 'short',
                            },
                        )}
                    </Text>
                </View>
                <View style={styles.gridItem}>
                    <Text style={styles.gridItemText}>Vote Count</Text>
                    <Text>{detailMovie.vote_count}</Text>
                </View>
            </View>
            <View>
                <MovieList
                    title="Recommendations"
                    path={`/movie/${id}/recommendations?language=en-US&page=1`}
                    coverType="poster"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    poster: {
        width: '100%',
        height: 300,
    },
    overview: {
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 18,
        marginTop: 18,
    },
    rating: {
        color: 'yellow',
        fontWeight: '700',
        fontSize: 14,
    },
    movieTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8,
    },
    gradientStyle: {
        padding: 20,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 24,
    },
    gridItem: {
        width: '40%',
        paddingTop: 5,
    },
    gridItemText: {
        fontWeight: '700',
    },
    favoriteContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
})

export default MovieDetail
