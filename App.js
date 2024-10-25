import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, Animated, View, SafeAreaView } from 'react-native';
import { useFonts, Inter_100Thin } from '@expo-google-fonts/inter';
import { useState, useEffect, useRef } from 'react';

export default function App() {

  let fontMain = useFonts({
    Inter_100Thin
  });

/*

  const [timerValue, timerState] = useState(0);

  const timerTest = () => {
    Animated.timing(timerState, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

*/

const [startTime, setStartTime] = useState(null);
const [now, setNow] = useState(null);
const intervalRef = useRef(null);

function timerStart() {
  setStartTime(Date.now());
  setNow(Date.now());

  clearInterval(intervalRef.current);
  intervalRef.current = setInterval(() => {
    setNow(Date.now());
  }, 1000);
}

function handleStop() {
  clearInterval(intervalRef.current);
}

let secondsPassed = 0;
if (startTime != null && now != null) {
  secondsPassed = (now - startTime) / 1000;
} 

  return (
    <SafeAreaView style={styles.cutwidth}>
      <View style={styles.mainview}>
        <Text style={styles.timertext}> {Math.trunc(secondsPassed)} </Text>
        <Pressable onPress={timerStart}>
          <View style={styles.buttonview}>
            <Text style={styles.timertext}>START!</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cutwidth: {
    flex: 1,
    backgroundColor: 'lightcyan',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '60%',
    marginHorizontal: '20%',
    borderRadius: 32,
  },
  mainview: {
    flex: 1,
    backgroundColor: 'palegreen',
    alignItems: 'center',
    maxWidth: '50%',
    justifyContent: 'center',
  },
  buttonview: {
    width: 200,
    height: 200,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightcyan',
    borderRadius: 20,
  },
  timertext: {
    color: 'black',
    fontFamily: 'Inter_100Thin',
    fontStyle: 'italic',
    fontSize: 36,
  },
  bodytext: {
    color: 'white',
    fontFamily: 'Inter_100Thin',
    fontStyle: 'italic',
    fontSize: 36,
  }
});
