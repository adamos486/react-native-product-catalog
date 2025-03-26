import {StyleSheet, View, Dimensions, FlatList, SafeAreaView, Text, ScrollView} from 'react-native';
import Header from '../components/Header';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../types';
import VideoBanner from "../components/VideoBanner";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

type HomeProps = {
    navigation: HomeScreenNavigationProp
}

export const Home: React.FC<HomeProps> = ({ navigation }) => {
    const videoBanners = [
        {
            text: "Colour Drop: The Indigo Effect",
            buttonText: "Shop Now",
            source: 'https://assets.aritzia.com/video/upload/q_auto:best,f_auto:video,c_fill,w_540/sp25-wk7-hp-03-18-hero-sm',
            onButtonPress: () => navigation.navigate('Catalog')
        },
        {
            text: "New Fête Chiffon™",
            buttonText: "Shop Now",
            source: 'https://assets.aritzia.com/video/upload/q_auto:best,f_auto:video,c_fill,w_540/sp25-wk7-hp-03-22-hero-sm',
            onButtonPress: () => navigation.navigate('Catalog')
        },
    ]

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Header />
                <FlatList
                    data={videoBanners}
                    renderItem={({item}) => (<VideoBanner {...item} />)}
                    keyExtractor={(_, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    );
}
