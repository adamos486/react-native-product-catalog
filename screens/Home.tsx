import {StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import {useVideoPlayer, VideoView} from 'expo-video';

// const videoSource = 'https://assets.aritzia.com/video/upload/q_auto:best/sp25-wk4-hp-02-25-feature-sm.mp4';
const videoSource = 'https://assets.aritzia.com/video/upload/q_auto:best,f_auto:video,c_fill,w_540/sp25-wk7-hp-03-18-hero-sm';

export const Home = ({navigation} : {navigation: any}) => {
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    })

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.wrapper}>
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Aritzia</Text>
                        <View style={{width: 210}}></View>
                        <Text style={styles.headerText}>Search</Text>
                        <View style={{width: 10}}></View>
                        <Text style={styles.headerText}>Cart</Text>
                    </View>
                    <View style={styles.videoContainer}>
                        <VideoView style={styles.video} player={player} nativeControls={false}/>
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
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    },
});
