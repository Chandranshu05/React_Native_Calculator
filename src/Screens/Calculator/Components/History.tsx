import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/Utils/Shared/scaler';

function History({ history }: any) {
    return (
        <>
            {history.map((h: any, i: number) => {
                return (
                    <View key={i}>

                        <Spacer size={scaler(15)} />

                        <Typography
                            textAlign="right"
                            color="white"
                            fontSize={scaler(28)}
                        >
                            {h.expression}
                        </Typography>

                        <Spacer />
                        
                    </View>
                );
            })}
        </>
    );
}

export default History;