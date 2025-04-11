import { View, StyleSheet } from 'react-native';
import Botao from './Botao';

const tabuleiro = () => {
    <View style={styles.container}>
        <View style={styles.botoes}>
            <Botao/>
            <Botao/>
            <Botao/>
            <Botao/>
    
            <Botao/>
            <Botao/>
            <Botao/>
            <Botao/>
    
            <Botao/>
            <Botao/>
            <Botao/>
            <Botao/>
    
            <Botao/>
            <Botao/>
            <Botao/>
            <Botao/>
    
        </View>

    </View>

    const styles = StyleSheet.create({
        botao: {
            fontSize: 50,
            width: width / 4,
            height: width / 4,
            backgroundColor: '#f0f0f0',
            textAlign: 'center',
            borderWidth: 1,
            borderColor: '#888',
        },
        visor: {
            flex: 1,
            padding: 20,
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-end",
            backgroundColor: "rgba(0,0,0,0.6)"
        },
        container: {
            flex: 1,
            justifyContent: 'flex-end',
        },
        botoes: {
            flexDirection: "row",
            flexWrap: "wrap"
        }
    })
}
export default tabuleiro;