import { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

const calculoHoraExtra = () => {
    const [salarioBase, setvalorSalario] = useState(0);
    const [horasTrabalhadas, setTotalHora] = useState(0);
    const [salarioFinal, setvalorFinal] = useState(0);
    const horasNormais = 160;

    return (

        <View style={styles.constainer}>
            <ImageBackground style={styles.logo} source={'https://46587.cdn.simplo7.net/static/46587/sku/tecidos-tecido-estampado-tempero-e-pizza-fundo-preto-100-algodao--p-1662898471442.jpg'} >

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
                        if (horasTrabalhadas <= 160) {  
                            var valorHora = salarioBase / horasNormais
                            var horasExtras = horasTrabalhadas - horasNormais
                            var valorHoraExtra = valorHora * 1.5
                            var salario = valorHora * horasTrabalhadas
                            var salarioExtra = salarioBase + (horasExtras * valorHoraExtra)
                            
                            setvalorFinal(salario)          
                            
                        } else {
                            setvalorFinal(salarioExtra)
                        
                        }
                    }}
                />
                <Text style={styles.fontes}>Salário base: {salarioBase}</Text>
                <Text style={styles.fontes}>Horas trabalhadas: {horasTrabalhadas}</Text>
                <Text style={styles.fontes}>Salário final: {salarioFinal}</Text>
            </ImageBackground>
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
        alignItems: 'center'
    }
});

export default calculoHoraExtra;
