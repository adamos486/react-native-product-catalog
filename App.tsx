import { StyleSheet, View } from 'react-native';
import {VideoPlayer} from 'expo-video';

export default function App() {
  return (
    <View style={styles.container}>
      <VideoPlayer
          source={{uri: 'https://assets.aritzia.com/video/upload/q_auto:best/sp25-wk4-hp-02-25-feature-sm.mp4'}}
          style={{ width: 600, height: 600}}
          shouldPlay
          isLooping
        />
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
  video: {
    flex: 1
  }
});
