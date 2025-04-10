// 2. Simulador de Pedágio
// Crie um aplicativo onde o usuário informe:
// ●       Tipo de veículo (Carro, Moto, Caminhão)
// ●       Distância percorrida (em km)
// O pedágio é cobrado com base no tipo de veículo:
// ●       Carro: R$ 0,10 por km
// ●       Moto: R$ 0,05 por km
// ●       Caminhão: R$ 0,15 por km
// O app deve exibir o total a pagar.
// Exemplo:
// ●       Tipo: Carro
// ●       Distância: 200 km
// ●       Total: R$ 20,00


import { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

const pedagio = () => {
    const [veiculo, setVeiculo] = useState('');
    const [km, setKm] = useState(0);
    const [valorFinal, setvalorFinal] = useState(0);
    const valorCarro = 0.10;
    const valorMoto = 0.05;
    const valorCaminhao = 0.15;
    
    return (

        <View style={styles.constainer}>
                <Text style={styles.fonte}>Tipo de veiculo</Text>
                <Text style={styles.fontes}>Tipo de veiculo</Text>
                <TextInput
                    value={veiculo}
                    onChangeText={setVeiculo}
                    placeholder="Informe o Tipo de veículo(carro,moto,caminhão)"
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
                        const kmPorHora = Number(km);
                        const valorHora = salario / horasNormais;

                        if (horas <= horasNormais) {
                            let salarioFinal = valorHora * horas
                            setvalorFinal(salarioFinal)
                        } else {
                            let horasExtras = horas - horasNormais
                            let valorHoraExtra = valorHora * 1.5
                            let salarioFinal = salario + (horasExtras * valorHoraExtra)
                            setvalorFinal(salarioFinal)
                        }
                    }}
                />
                <Text style={styles.fontes}>Salário base: {salarioBase}</Text>
                <Text style={styles.fontes}>Horas trabalhadas: {horasTrabalhadas}</Text>
                <Text style={styles.fontes}>Salário final: {valorFinal.toFixed(2)}</Text>
        </View>


    );
};
const styles = StyleSheet.create({
    fontes: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    logo: {
        width: 300,
        height: 400
    },
    fonte: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    constainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default pedagio;
