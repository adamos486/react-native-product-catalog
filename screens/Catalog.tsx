import React, {useState, useEffect} from 'react';
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
import {Feather, AntDesign, SimpleLineIcons} from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type CatalogScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Catalog'>

type CatalogProps = {
    navigation: CatalogScreenNavigationProp
}

const width = Dimensions.get('window').width

export const Catalog: React.FC<CatalogProps> = ({navigation}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/products1-FrzYf4LeHlyB478e20ufBNb29XDCua.json');
                const json = await response.json();
                // console.log(JSON.stringify(json))
                console.log(json.data.map(({ id }: { id: string }) => id))
                setProducts(json.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const renderProductItem = ({item}: { item: any }) => (
        <View style={styles.productItem}>
            <Image
                style={styles.productImage}
                source={{uri: item.imageGroups[0].images[0].link}} // Use the first image from the first image group
            />
            <View style={styles.colorOptions}>
                {item.imageGroups.filter((group: any) => group.variationAttributes && group.variationAttributes.length > 0).map((group: any, index: any) => (
                    <View key={index} style={styles.colorCircle}/>
                ))}
                {item.imageGroups.length > 5 &&
                    <Text style={styles.additionalColors}>+{item.imageGroups.length - 5}</Text>}
            </View>
            <Text style={styles.brandName}>{item.brand}</Text>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price} - ${item.priceMax}</Text>
            <Text style={styles.recentlyViewed}>RECENTLY VIEWED</Text>
            <AntDesign name="hearto" size={24} color="black" style={styles.saveIcon}/>
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
                {/*Carousel */
                }
                <Carousel/>
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
                keyExtractor={item => item}
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
        margin: 8,
        width: width * 0.5,
        backgroundColor: '#f9f9f9',
        padding: 12,
        borderRadius: 8,
    },
    productImage: {
        width: width * 0.4,
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
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    productName: {
        fontSize: 14,
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 4,
    },
    recentlyViewed: {
        fontSize: 12,
        color: 'gray',
    },
    saveIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});

export default Catalog;
