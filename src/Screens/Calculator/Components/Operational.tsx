import React from 'react'
import { StyleSheet, View } from 'react-native';
import scaler from 'src/Utils/Shared/scaler';
import Button from './Button';

function Operational({ setResult, text, setText, setHistory }: any) {

    const handleButtonClick = (value: any) => {
        if (text === '') {
            return;
        }
        else {
            setText((prevText: any) => {
                const char = prevText.charAt(prevText.length - 1);

                if (Number.isInteger(Number(char)) || char === ')') {
                    return prevText + value;
                }
                else if (char === '(' && value !== '-') {
                    return prevText;
                }
                else if (char === '(' && value === '-') {
                    return prevText + value;
                }
                else if (char === '-') {
                    const char2 = prevText.charAt(prevText.length - 2);
                    if (char2 === '(') {
                        return prevText;
                    }
                }
                else{
                    return;
                }
                const subText = prevText.substr(0, prevText.length - 1);
                return subText + value;
            });
        }
    };

    const calcPercentage = () => {
        if (text === '') {
            return;
        }
        const char = text.charAt(text.length - 1);
        if (Number.isInteger(Number(char))) {
            const indexes: Array<number> = [
                '+',
                '-',
                '/',
                'x',
                ')',
            ].map((operator: String) => text.lastIndexOf(operator));
            const lastIndex = Math.max.apply(null, indexes);
            const subText = text.substr(0, lastIndex + 1);
            const restText = text.substr(lastIndex + 1, text.length);
            const percentage = eval(restText + '/100');
            setText(subText + percentage);
        }
    };

    const calcResult = () => {
        if (text === '') {
            return;
        }
        try {
            const result =  eval(text.replace(/x/gi, '*')).toString();
            setResult(result);
            const history = { expression: text, result: result };
            setHistory((prevHistory: any) => [...prevHistory, history]);
        } catch (error) {
            console.log(error);
            setResult('Error');
        }
        return;
    };

    return (
        <View 
        style={styles.operators}
        >
            <View 
            style={styles.mindiv}
            >
                <Button
                    title={'-'}
                    style={operations}
                    onClick={handleButtonClick}
                    />
                <Button
                    title={'/'}
                    style={operations}
                    onClick={handleButtonClick}
                />
            </View>
            <View 
            style={styles.plusButton}
            >
                <Button
                    title={'+'}
                    style={plus}
                    onClick={handleButtonClick}
                />
                
                <View style={styles.mulper}>
                    <Button
                        title={'x'}
                        style={operations}
                        onClick={handleButtonClick}
                    />
                    <Button
                        title={'%'}
                        style={operations}
                        onClick={calcPercentage}
                    />
                </View>
            </View>
            <Button
                title={'='}
                style={equalButton}
                onClick={calcResult}
            />
        </View>
    )
}

export default Operational


const styles = StyleSheet.create({
    operators: {
      paddingBottom: scaler(25),
      paddingHorizontal: scaler(10),
    },
    mindiv: {
      flex: scaler(1),
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: scaler(15),
      paddingRight: scaler(10),
    },
    plusButton: {
      flex: scaler(2),
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    mulper: {
      marginLeft: scaler(10),
      marginBottom: scaler(2),
      flex: scaler(1),
      justifyContent: 'space-between',
      flexDirection: 'column',
      paddingBottom: scaler(20),
    },
  });
  
  const plus = StyleSheet.create({
    appButtonContainer: {
      height: scaler(120),
      width: scaler(50),
      borderRadius: scaler(50),
      textAlign: 'center',
      backgroundColor: '#fab96f'
    },
    appButtonText: {
      fontSize: scaler(30),
      textAlign: 'center',
      color: 'white',
      paddingTop: scaler(40),
    },
  });

  const equalButton = StyleSheet.create({
    appButtonContainer: {
      height: scaler(50),
      width: scaler(120),
      borderRadius: scaler(50),
      backgroundColor: '#fb74a3'
    },
    appButtonText: {
      fontSize: scaler(26),
      textAlign: 'center',
      color: 'white',
      paddingTop: scaler(5),
    },
  });
  const operations = StyleSheet.create({
    appButtonContainer: {
      height: scaler(50),
      width: scaler(50),
      borderRadius: scaler(50),
      backgroundColor: '#fab96f'
    },
    appButtonText: {
      fontSize: scaler(26),
      textAlign: 'center',
      color: 'white',
      paddingTop: scaler(5),
    },
  });
  