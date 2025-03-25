import {StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView, Dimensions} from 'react-native';
import {useVideoPlayer, VideoView} from 'expo-video';
import Header from '../components/Header';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

const videoSource = 'https://assets.aritzia.com/video/upload/q_auto:best,f_auto:video,c_fill,w_540/sp25-wk7-hp-03-18-hero-sm';
const chiffonSource = 'https://assets.aritzia.com/video/upload/q_auto:best,f_auto:video,c_fill,w_540/sp25-wk7-hp-03-22-hero-sm';

const videoData = [
    {id: '1', source: videoSource},
    {id: '2', source: chiffonSource},
]

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

type HomeProps = {
    navigation: HomeScreenNavigationProp
}

const windowHeight = Dimensions.get('window').height

export const Home: React.FC<HomeProps> = ({navigation}) => {
    const colorDropPlayer = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play()
    })
    const chiffonPlayer = useVideoPlayer(chiffonSource, player => {
        player.loop = true
        player.play()
    })

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.wrapper}>
                <Header onAritziaTap={() => {}} />
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.videoContainer}>
                        <VideoView style={styles.video} player={colorDropPlayer} nativeControls={false}/>
                        <View style={styles.overlay}>
                            <View style={{height: 300}}></View>
                            <Text style={styles.overlayText}>The Work Wardrobe</Text>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Catalog')}>
                                <Text style={styles.buttonText}>Shop Looks</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.videoContainer}>
                        <VideoView style={styles.video} player={chiffonPlayer} nativeControls={false}/>
                        <View style={styles.overlay}>
                            <View style={{height: 300}}></View>
                            <Text style={styles.overlayText}>The Work Wardrobe</Text>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Catalog')}>
                                <Text style={styles.buttonText}>Shop Looks</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
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
    videoContainer: {
        width: '100%',
        position: 'relative',
    },
    video: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 90,
        left: 15,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    overlayText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'NonSeasonal',
        textShadowColor: '#000',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
    },
    button: {
        marginTop: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent button background
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'NonSeasonal',
    },
});
