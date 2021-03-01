import React from 'react'
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import scaler from 'src/Utils/Shared/scaler';
import Button from './Button';

function Brackets({
    text,
    setText,
    open,
    setopen,
    }: any) {

        const bracket = (value: any) => {
            if(value === '('){
                const char = text.charAt(text.length - 1);

                if(char !== '' && (Number.isInteger(Number(char)) || char === ')')) {
                    setText(text + 'x' + value);
                }
                else {
                    setText(text + value);
                }
                setopen((prevopen: number) => prevopen + 1);
                return;
            }
            else if (text !== '' && value === ')'){
                const char = text.charAt(text.length - 1);
                
                if(Number.isInteger(Number(char)) && open > 0) {
                    setText(text + value);
                    setopen((prevopen: number) => prevopen - 1);
                }
                return;
            }
        }
    return (
        
        <View style={styles.upbrackets}> 
            <Button title={'('} style={equal} onClick={bracket} />
            <Spacer horizontal size={scaler(25)}/>
            <Button title={')'} style={equal} onClick={bracket} />
        </View>
    )
}

export default Brackets

const styles = StyleSheet.create({
    upbrackets: {
      paddingBottom: scaler(10),
      marginLeft: scaler(2),
      marginRight: scaler(2),
      padding: scaler(5),
      paddingHorizontal: scaler(20),
      flexDirection: 'row',
      justifyContent: 'flex-start',
    }
  });
  
  const equal = StyleSheet.create({
    appButtonContainer: {
      backgroundColor: '#1c2d47',
      height: scaler(50),
      width: scaler(100),
      borderRadius: scaler(50),
      flex: 1,
      
    },
    appButtonText: {
      fontSize: scaler(25),
      textAlign: 'center',
      color: 'white',
      paddingTop: scaler(5),
      justifyContent: 'space-around',
    },
  });

