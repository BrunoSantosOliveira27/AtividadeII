import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const tarifaLuz = () => {
    const [bandeira, setBandeira] = useState('');
    const [consumo, setConsumo] = useState(0);
    const [valorFinal, setvalorFinal] = useState(0);
    const verde = 0.50;
    const amarela = 0.55;
    const vermelha1 = 0.60;
    const vermelha2 = 0.70;
    return (
        <View style={styles.container}>
            <Text style={styles.fontes}>Tipo de bandeira tarifada:</Text>
            <TextInput
                value={bandeira}
                onChangeText={setBandeira}
                placeholder="Informe a cor da bandeira"
            />
            <Text style={styles.fontes}>Consumo em KWh</Text>
            <TextInput
                value={consumo}
                onChangeText={setConsumo}
                placeholder="KWh consumido"
            />
            <Button
                title="Exibir total a pagar"
                onPress={() => {
                    if (bandeira.toUpperCase() === "VERDE") {
                        var valorConta = consumo * verde
                        setvalorFinal(valorConta)
                    }
                    else if (bandeira.toUpperCase() === "AMARELA") {
                        var valorConta = consumo * amarela
                        setvalorFinal(valorConta)

                    }
                    else if (bandeira.toUpperCase() === "VERMELHA1") {
                        var valorConta = consumo * vermelha1
                        setvalorFinal(valorConta)
                    }
                    else if (bandeira.toUpperCase() === "VERMELHA2") {
                        var valorConta = consumo * vermelha2
                        setvalorFinal(valorConta)
                    } else {
                        alert("Por favor, informe uma bandeira válida!!")
                    }
                }}
            />
            <Text style={styles.resultado}>Bandeira: {bandeira}</Text>
            <Text style={styles.resultado}>Consumo: {consumo} KWh</Text>
            <Text style={styles.resultado}>Total: R$ {valorFinal.toFixed(2)}</Text>
        </View>


    );
};
const styles = StyleSheet.create({
    fontes: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    resultado: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    container: {
        alignItems: 'center',
        marginTop: 50
    }
});

export default tarifaLuz;
