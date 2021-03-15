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
import Typography from 'src/Components/Shared/Typography/Typography'
import Row from 'src/Components/Shared/Row/Row'

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
    <Container fullScreen>
      <LinearGradient colors={["#2e4c6f", "#172236"]} style={{ flex: 1 }}>
        <Container>
          <View style={{
            flex: scaler(9),
            paddingRight: scaler(15)
          }}>

            <Spacer size={scaler(55)} />

            <Typography
            fontSize={scaler(65)}
            color="white"
            textAlign="right"
            >{result}</Typography>

            <Spacer size={scaler(15)} />

            <Body>
              <ScrollView >
                <History
                  history={history} />
              </ScrollView>
            </Body>

            <Typography
            color='white'
            fontSize={scaler(35)}
            textAlign= 'right' 
            style={{paddingTop: scaler(35)}}>{text}</Typography>

            <Spacer size={scaler(25)} />

          </View>

          <Brackets
            text={text}
            setText={setText}
            open={open}
            setopen={setopen}
          />

          <Row style={{
            flexGrow: scaler(5)
          }}>
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
            
          </Row>

          <Spacer size={scaler(5)}/>

        </Container>
        {/* <Spacer /> */}
      </LinearGradient>
    </Container>
  )
}

export default CalculatorScreen;