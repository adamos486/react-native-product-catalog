import React from 'react'
import {View, Text, Image, StyleSheet, Dimensions, FlatList, TouchableOpacity} from 'react-native'

const {width} = Dimensions.get('window')
const carouselItems = require('../html-and-js/carousel.json')

const Carousel = () => {
    const renderItem = ({item}: { item: any }) => (
        <TouchableOpacity onPress={() => console.log('Navigate to: ', item.link)}>
            <View style={styles.itemContainer}>
                <Image style={styles.image} source={{uri: item.image}} resizeMode="cover"/>
                <Text style={styles.itemText}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <FlatList
            data={carouselItems}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: width * 0.41,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    image: {
        width: width * 0.4,
        height: width * 0.5,
    },
    itemText: {
        marginTop: 10,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'left',
        fontFamily: 'NonSeasonal'
    },
})

export default Carousel
