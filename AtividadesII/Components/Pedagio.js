import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const pedagio = () => {
    const [veiculo, setVeiculo] = useState('');
    const [km, setKm] = useState(0);
    const [valorFinal, setvalorFinal] = useState(0);
    const valorCarro = 0.10;
    const valorMoto = 0.05;
    const valorCaminhao = 0.15;
    
    return (
        <View style={styles.container}>
                <Text style={styles.fontes}>Tipo de veiculo</Text>
                <TextInput
                    value={veiculo}
                    onChangeText={setVeiculo}
                    placeholder="(carro, moto ou caminhao)"
                />
                <Text style={styles.fontes}>Distância em KM</Text>
                <TextInput
                    value={km}
                    onChangeText={setKm}
                    placeholder="Total distancia percorrida em KM/h "
                />
                <Button
                    title="Exibir total a pagar"
                    onPress={() => {
                        if (veiculo.toUpperCase() === "MOTO"){
                            var pedagio = km * valorMoto
                            setvalorFinal(pedagio)

                        } 
                        else if (veiculo.toUpperCase() === "CARRO"){
                            var pedagio = km * valorCarro
                            setvalorFinal(pedagio)

                        } 
                        else if (veiculo.toUpperCase() === "CAMINHAO"){
                            var pedagio = km * valorCaminhao
                            setvalorFinal(pedagio)
                        } else {
                            alert("Por favor, informe apenas Moto, Carro ou Caminhão!")
                        }
                        

                    }}
                />
                <Text style={styles.resultado}>Tipo de veículo: {veiculo}</Text>
                <Text style={styles.resultado}>Distância: {km} Km/h</Text>
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

export default pedagio;
