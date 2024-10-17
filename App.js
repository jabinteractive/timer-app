import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useFonts, Inter_100Thin } from '@expo-google-fonts/inter';

export default function App() {

  let fontMain = useFonts({
    Inter_100Thin
  });

  return (
    <SafeAreaView style={styles.cutwidth}>
      <View style={styles.mainview}>
        <Text style={styles.bodytext}>Working on it...</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cutwidth: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '60%',
    marginHorizontal: '20%',
    borderRadius: 32,
  },
  mainview: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    maxWidth: '50%',
    justifyContent: 'center',
  },
  bodytext: {
    color: 'white',
    fontFamily: 'Inter_100Thin',
    fontStyle: 'italic',
    fontSize: 36,
  }
});
