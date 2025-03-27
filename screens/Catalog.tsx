import type React from 'react'
import {useState, useEffect} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import type { StackNavigationProp } from '@react-navigation/stack';
import type {CatalogData, CatalogImageGroup, RootStackParamList} from '../types';
import { titleCase } from '../utilities/textTools';
import catalogData from '../html-and-js/matrix/scrolling_list.json';

type CatalogScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Catalog'>

type CatalogProps = {
    navigation: CatalogScreenNavigationProp
}

const width = Dimensions.get('window').width

export const Catalog: React.FC<CatalogProps> = ({navigation}) => {
    const [products, setProducts] = useState<CatalogData[]>([]);

    useEffect(() => {
        setProducts(catalogData.map(item => item.data[0]))
    }, []);

    const showPrice = (price: number, priceMax?: number) => {
        if (priceMax)
            return (<Text style={{color: 'red', fontFamily: 'NonSeasonal', fontSize: 12}}>{`$${price} - $${priceMax}`}</Text>)
        return (<Text style={{fontFamily: 'NonSeasonal', fontSize: 12}}>{`$${price}`}</Text>)
    }

    const renderProductItem = ({item}: { item: CatalogData }) => (
        <View style={styles.productItem}>
            <Image
                style={styles.productImage}
                source={{uri: item.imageGroups[0].images[0].link}} // Use the first image from the first image group
            />
            <View style={styles.colorOptions}>
                {
                    item.imageGroups
                        .filter((group: CatalogImageGroup) => group.variationAttributes && group.variationAttributes.length > 0)
                        .map((_: CatalogImageGroup, index: number) => (
                            <View key={index} style={styles.colorCircle}/>
                        ))
                }
                {item.imageGroups.length > 5 &&
                    <Text style={styles.additionalColors}>+{item.imageGroups.length - 5}</Text>}
            </View>
            <Text style={styles.brandName}>{item.brand}</Text>
            <Text style={styles.productName}>{titleCase(item.name)}</Text>
            {showPrice(item.price, item.priceMax)}
        </View>
    );

    const ListHeader = () => {
        return (
            <>
                <ScrollView horizontal style={styles.filterOptions}>
                    <TouchableOpacity style={styles.filterOption}>
                        <Text>Sort</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterOption}>
                        <Text>Size</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterOption}>
                        <Text>Color</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterOption}>
                        <Text>Brand</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterOption}>
                        <Text>All Filters</Text>
                    </TouchableOpacity>
                </ScrollView>
                <Carousel />
            </>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <Header onAritziaTap={() => navigation.pop()}/>
            {/*Vertical scroll list*/}
            {/* Product Grid */}
            <FlatList
                data={products}
                renderItem={renderProductItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.productList}
                ListHeaderComponent={ListHeader}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'NonSeasonal'
    },
    headerIcons: {
        flexDirection: 'row',
    },
    headerIcon: {
        marginHorizontal: 8,
    },
    filterOptions: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    filterOption: {
        marginRight: 16,
    },
    productList: {
        padding: 8,
    },
    productItem: {
        flex: 1,
        width: width * 0.5,
        backgroundColor: '#fff',
    },
    productImage: {
        width: width * 0.47,
        height: width * 0.7,
        marginBottom: 8,
    },
    colorOptions: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    colorCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'gray',
        marginRight: 8,
    },
    additionalColors: {
        fontSize: 14,
        color: 'gray',
    },
    brandName: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 4,
        fontFamily: 'NonSeasonal',
    },
    productName: {
        fontSize: 12,
        marginBottom: 4,
        fontFamily: 'NonSeasonal'
    },
    productPrice: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 4,
        fontFamily: 'NonSeasonal'
    },
    recentlyViewed: {
        fontSize: 12,
        color: 'gray',
        fontFamily: 'NonSeasonal'
    },
});

export default Catalog;
