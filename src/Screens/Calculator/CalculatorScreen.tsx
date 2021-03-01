import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Body from 'src/Components/Shared/Body/Body'
import Container from 'src/Components/Shared/Container/Container'
import Brackets from './Components/Brackets'
import Numbers from './Components/Numbers'
import Operational from './Components/Operational'
import scaler from '../../Utils/Shared/scaler'
import AsyncStorage from '@react-native-community/async-storage'
import History from './Components/History'
import LinearGradient from 'react-native-linear-gradient'
import Spacer from 'src/Components/Shared/Spacer/Spacer'

function CalculatorScreen() {

  const [open, setopen] = useState(0);
  const [history, setHistory] = useState([]);
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    AsyncStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    (async () => {
      const prevHistory = await AsyncStorage.getItem('history');
      setHistory(prevHistory ? JSON.parse(prevHistory) : []);
    })();
  }, []);


  const back = () => {
    setText((prevText: any) => {
      const char = prevText.charAt(prevText.length - 1);
      if (char === ')') {
        setopen((prevCount) => prevCount + 1);
      }
      if (char === '(') {
        setopen((prevCount) => prevCount - 1);
      }
      return prevText.substr(0, prevText.length - 1);
    });
  };

  return (
    <Container>
      <LinearGradient colors={["#2e4c6f", "#172236"]} style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.result}>

            <Spacer size={scaler(55)} />

            <Text style={styles.resultText}>{result}</Text>


            <Spacer size={scaler(15)} />

            <Body>
              <ScrollView >
                <History
                  history={history} />
              </ScrollView>
            </Body>

            <Text style={styles.operationText}>{text}</Text>

            <Spacer size={scaler(25)} />

          </View>

          <Brackets
            text={text}
            setText={setText}
            open={open}
            setopen={setopen}
          />

          <View style={styles.btns}>
            <Numbers
              text={text}
              setText={setText}
              setResult={setResult}
              setopen={setopen}
              result={result}
              setHistory={setHistory}
              back={back}
            />

            <Operational
              setResult={setResult}
              text={text}
              setText={setText}
              setHistory={setHistory}
            />
            
          </View>

          <Spacer size={scaler(5)}/>

        </View>
        {/* <Spacer /> */}
      </LinearGradient>
    </Container>
  )
}

export default CalculatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: scaler(1),
  },
  result: {
    flex: scaler(9),
    paddingRight: scaler(15),
  },
  resultText: {
    color: 'white',
    fontSize: scaler(65),
    textAlign: 'right',
  },
  operationText: {
    paddingTop: scaler(15),
    color: 'white',
    fontSize: scaler(35),
    textAlign: 'right',
  },
  btns: {
    flexGrow: scaler(5),
    flexDirection: 'row',
  },
});