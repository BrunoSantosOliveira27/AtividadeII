import { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

const calculoHoraExtra = () => {
    const [salarioBase, setvalorSalario] = useState(0);
    const [horasTrabalhadas, setTotalHora] = useState(0);
    const [salarioFinal, setvalorFinal] = useState(0);
    const horasNormais = 160;

    return (

        <View style={styles.constainer}>
                <Text style={styles.fonte}>Salario base</Text>
                <Text style={styles.fontes}>Salário base</Text>
                <TextInput
                    value={salarioBase}
                    onChangeText={setvalorSalario}
                    placeholder="Valor do salario"
                />
                <Text style={styles.fontes}>Horas trabalhadas</Text>
                <TextInput
                    value={horasTrabalhadas}
                    onChangeText={setTotalHora}
                    placeholder="Total de horas trabalhadas"
                />
                <Button
                    title="Calcular"
                    onPress={() => {
                        const salario = Number(salarioBase);
                        const horas = Number(horasTrabalhadas);
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
                <Text style={styles.fontes}>Salário final: {salarioFinal.toFixed(2)}</Text>
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

export default calculoHoraExtra;
