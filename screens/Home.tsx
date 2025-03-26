import {StyleSheet, View, Dimensions, FlatList, SafeAreaView, Text } from 'react-native';
import Header from '../components/Header';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../types';
import VideoBanner from "../components/VideoBanner";

const videoSource = 'https://assets.aritzia.com/video/upload/q_auto:best,f_auto:video,c_fill,w_540/sp25-wk7-hp-03-18-hero-sm';
const chiffonSource = 'https://assets.aritzia.com/video/upload/q_auto:best,f_auto:video,c_fill,w_540/sp25-wk7-hp-03-22-hero-sm';


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

type HomeProps = {
    navigation: HomeScreenNavigationProp
}

const screenHeight = Dimensions.get('window').height

export const Home: React.FC<HomeProps> = ({navigation}) => {
    const videoBanners = [
        {
            id: '1',
            source: videoSource,
            text: "Colour Drop: The Indigo Effect",
            buttonText: "Shop Now",
            onButtonPress: () => navigation.navigate('Catalog')
        },
        {
            id: '2',
            source: chiffonSource,
            text: "New Fête Chiffon™",
            buttonText: "Shop Now",
            onButtonPress: () => navigation.navigate('Catalog')
        },
    ]

    const test = [
        {
            id: '1',
            text: "hello"
        },
        {
            id: '2',
            text: "hello"
        },
        {
            id: '3',
            text: "hello"
        },
        {
            id: '4',
            text: "hello"
        },
        {
            id: '5',
            text: "hello"
        },
        {
            id: '6',
            text: "hello"
        },
        {
            id: '7',
            text: "hello"
        },
        {
            id: '8',
            text: "hello"
        },
        {
            id: '9',
            text: "hello"
        },
        {
            id: '10',
            text: "hello"
        },
        {
            id: '11',
            text: "hello"
        },
        {
            id: '12',
            text: "hello"
        },
        {
            id: '13',
            text: "hello"
        },
        {
            id: '14',
            text: "hello"
        },
        {
            id: '15',
            text: "hello"
        },
        {
            id: '16',
            text: "hello"
        },
        {
            id: '17',
            text: "hello"
        },
        {
            id: '18',
            text: "hello"
        },
        {
            id: '19',
            text: "hello"
        },
        {
            id: '20',
            text: "hello"
        },
        {
            id: '21',
            text: "hello"
        },
        {
            id: '22',
            text: "hello"
        },
        {
            id: '23',
            text: "hello"
        },
        {
            id: '24',
            text: "hello"
        },
        {
            id: '25',
            text: "hello"
        },
        {
            id: '26',
            text: "hello"
        },
        {
            id: '27',
            text: "hello"
        },
        {
            id: '28',
            text: "hello"
        },
        {
            id: '29',
            text: "hello"
        },
        {
            id: '30',
            text: "hello"
        },
        {
            id: '31',
            text: "hello"
        },
        {
            id: '32',
            text: "hello"
        },
        {
            id: '33',
            text: "hello"
        },
        {
            id: '34',
            text: "hello"
        },
        {
            id: '35',
            text: "hello"
        },
        {
            id: '36',
            text: "hello"
        },
        {
            id: '37',
            text: "hello"
        },
        {
            id: '38',
            text: "hello"
        },
        {
            id: '39',
            text: "hello"
        },
        {
            id: '40',
            text: "hello"
        },
        {
            id: '41',
            text: "hello"
        },
        {
            id: '42',
            text: "hello"
        },
        {
            id: '43',
            text: "hello"
        },
        {
            id: '44',
            text: "hello"
        },
        {
            id: '45',
            text: "hello"
        },
        {
            id: '46',
            text: "hello"
        },
        {
            id: '47',
            text: "hello"
        },
        {
            id: '48',
            text: "hello"
        },
    ]

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <FlatList
                    data={videoBanners}
                    renderItem={({item}) => (<VideoBanner {...item} />)}
                    keyExtractor={(item) => item.id.toString()}
                    stickyHeaderIndices={[0]}
                    ListHeaderComponent={() => (<Header onAritziaTap={() => {}} />)}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        height: screenHeight,
        backgroundColor: '#fff',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1000,
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    wrapper: {
        height: screenHeight,
        flex: 1,
        flexGrow: 1,
        position: 'relative',
        backgroundColor: "#fff"
    },
    container: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});
