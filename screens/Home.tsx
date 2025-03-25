import {StyleSheet, View, SafeAreaView, Dimensions, FlatList} from 'react-native';
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

const windowHeight = Dimensions.get('window').height

export const Home: React.FC<HomeProps> = ({navigation}) => {
    const videoBanners = [
        {
            id: '1',
            source: videoSource,
            text: "The Work Wardrobe",
            buttonText: "Shop Looks",
            onButtonPress: () => navigation.navigate('Catalog')
        },
        {
            id: '2',
            source: chiffonSource,
            text: "The Work Wardrobe",
            buttonText: "Shop Looks",
            onButtonPress: () => navigation.navigate('Catalog')
        },
    ]

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.wrapper}>
                <Header onAritziaTap={() => {}} />
                <FlatList
                    data={videoBanners}
                    renderItem={({item}) => (<VideoBanner {...item} />)}
                    contentContainerStyle={styles.container}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
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
        flex: 1,
        position: 'relative',
        backgroundColor: "#fff"
    },
    container: {
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});
