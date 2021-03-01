import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import scaler from 'src/Utils/Shared/scaler';

function History({ history }: any) {
    return (
        <>
            {history.map((h: any, i: number) => {
                return (
                    <View key={i}>
                        <Spacer size={scaler(15)} />
                        <Text
                            style={styles.text}
                        >
                            {h.expression}
                        </Text>
                        <Spacer />
                    </View>
                );
            })}
        </>
    );
}

export default History;

const styles = StyleSheet.create({
    text: {
        textAlign: 'right',
        color: 'white',
        fontSize: scaler(28)
    },
})
