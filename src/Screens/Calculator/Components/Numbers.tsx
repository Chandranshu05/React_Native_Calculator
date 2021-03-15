import React from 'react'
import { StyleSheet, View } from 'react-native';
import Col from 'src/Components/Shared/Col/Col';
import Row from 'src/Components/Shared/Row/Row';
import scaler from 'src/Utils/Shared/scaler';
import Button from './Button';

function Numbers({
    text,
    setText,
    back
}: any) {

    const handleButtonClick = (value: any) => {
        const char = text.charAt(text.length - 1);
        if ((char === '.' || !Number.isInteger(Number(char))) && value === '.') {
            return;
        }
        else if (text === '' && value === '.') {
            return setText('0.');
        }
        else if (text !== '') {
            if (char === ')') { 
                setText(text + 'x' + value);
            }
            else {
                setText(text + value);
            }
        }
        else {
            setText(value);
        }
    };

    return (
        <Col style={{
            paddingTop: scaler(15),
            flexGrow: scaler(1),
            paddingHorizontal: scaler(10)
        }}>
            <Row style={{
                flex: scaler(1),
                justifyContent: 'space-between',
            }}>
                <Button 
                    title={'7'}
                    style={numberBtn}
                    onClick={handleButtonClick}
                 />
                 <Button 
                    title={'8'}
                    style={numberBtn}
                    onClick={handleButtonClick}
                 />
                 <Button 
                    title={'9'}
                    style={numberBtn}
                    onClick={handleButtonClick}
                 />
            </Row>
            <Row style={{
                flex: scaler(1),
                justifyContent: 'space-between',
            }}>
                <Button 
                    title={'4'}
                    style={numberBtn}
                    onClick={handleButtonClick}
                 />
                 <Button 
                    title={'5'}
                    style={numberBtn}
                    onClick={handleButtonClick}
                 />
                 <Button 
                    title={'6'}
                    style={numberBtn}
                    onClick={handleButtonClick}
                 />
            </Row>
            <Row style={{
                flex: scaler(1),
                justifyContent: 'space-between',
            }}>
                <Button 
                    title={'1'}
                    style={numberBtn}
                    onClick={handleButtonClick}
                 />
                 <Button 
                    title={'2'}
                    style={numberBtn}
                    onClick={handleButtonClick}
                 />
                 <Button 
                    title={'3'}
                    style={numberBtn}
                    onClick={handleButtonClick}
                 />
            </Row>
            <Row style={{
                flex: scaler(1),
                justifyContent: 'space-between',
            }}>
                <Button 
                    title={'0'}
                    style={numberBtn}
                    onClick={handleButtonClick}
                 />
                 <Button 
                    title={'.'}
                    style={numberBtn}
                    onClick={handleButtonClick}
                 />
                 <Button 
                    title={'C'}
                    style={numberBtn}
                    onClick={back}
                 />
            </Row>

        </Col>
    )
}

export default Numbers;
  
  const numberBtn = StyleSheet.create({
    appButtonContainer: {
      height: scaler(50),
      width: scaler(50),
      borderRadius: scaler(50)
    },
    appButtonText: {
      fontSize: scaler(25),
      textAlign: 'center',
      color: 'white',
    },
  });
  