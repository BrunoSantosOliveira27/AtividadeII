import { TouchableHighlight, StyleSheet, View, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const Botao = (props) => {

    const estilosBotao = [estilos.botao]

    return (
        <View>
            <TouchableHighlight
                onPress={() => props.onClick(props.label)}>
                <Text style={estilosBotao}>
                    {props.label}
                </Text>
            </TouchableHighlight>
        </View>

    )
}

const estilos = StyleSheet.create({
    botao: {
        fontSize: 50,
        width: width / 4,
        height: width / 4,
        backgroundColor: 'black',
        textAlign: 'center',
    },
})

export default Botao