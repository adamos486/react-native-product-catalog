import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

const videoSource = 'https://assets.aritzia.com/video/upload/q_auto:best/sp25-wk4-hp-02-25-feature-sm.mp4';

export default function App() {
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  })

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <VideoView style={styles.video} player={player} nativeControls={false} />
        <View style={styles.overlay}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 10,
          }}>
            <Text>Aritzia</Text>
            <View style={{width: 230}}></View>
            <Text>Search</Text>
            <View style={{width: 10}}></View>
            <Text>Cart</Text>
          </View>
          <View style={{height: 300}}></View>
          <Text style={styles.overlayText}>The Work Wardrobe</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Press Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    textShadowOffset: { width: 1, height: 1 },
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
