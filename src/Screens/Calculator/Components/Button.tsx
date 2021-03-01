import React from 'react'
import { TouchableOpacity, Text} from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

const Button = (props: any) => {
    const {title, onClick, style, gradients} = props;

    return(
        <TouchableOpacity
            onPress={() => onClick(title)}
            style = {style.appButtonContainer}
            >
            {Array.isArray(gradients) ? (
                <LinearGradient
                    colors={gradients}
                    style={style.appButtonContainer}
                >
                    <Text
                    style={style.appButtonText}
                    >
                    {title}
                </Text>
                </LinearGradient>
            ) : (
            <Text
                style={style.appButtonText}
            >
            {title}
            </Text>
            )}
        </TouchableOpacity>
    );
};
export default Button;
