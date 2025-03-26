import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useVideoPlayer, VideoView} from "expo-video";

type VideoBannerProps = {
    id: string
    source: string
    text: string
    buttonText: string
    onButtonPress: () => void
}

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const VideoBanner: React.FC<VideoBannerProps> = ({ text, buttonText, source, onButtonPress }) => {
    const player = useVideoPlayer(source, player => {
        player.loop = true;
        player.play()
    })

    return (
        <View>
            <VideoView style={styles.video} player={player} nativeControls={false}/>
            <View style={styles.overlay}>
                <View style={{height: 300}} />
                <Text style={styles.overlayText}>{ text }</Text>
                <TouchableOpacity style={styles.button} onPress={() => onButtonPress()}>
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default VideoBanner

const styles = StyleSheet.create({
    videoContainer: {
        width: screenWidth,
        position: 'relative',
    },
    video: {
        width: screenHeight,
        height: screenWidth,
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
