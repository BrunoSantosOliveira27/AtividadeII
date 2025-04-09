import { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

const calculoHoraExtra = () => {
    const [SalarioBase, setvalorSalario] = useState(0);
    const [HorasTrabalhadas, setTotalHoraExtra] = useState(0);
    const [SalarioFinal, setvalorFinal] = useState(0);
    let jornadaNormal = 160;

    return (

        <View style={styles.constainer}>
            <ImageBackground style={styles.logo} source={'https://46587.cdn.simplo7.net/static/46587/sku/tecidos-tecido-estampado-tempero-e-pizza-fundo-preto-100-algodao--p-1662898471442.jpg'} >

                <Text style={styles.fonte}>Salario base</Text>
                <Text style={styles.fontes}>Valor do salário</Text>
                <TextInput
                    value={SalarioBase}
                    onChangeText={setvalorSalario}
                    placeholder="Valor do salario"
                />
                <Text style={styles.fontes}>Quantidade de horas extras</Text>
                <TextInput
                    value={HorasTrabalhadas}
                    onChangeText={setTotalHoraExtra}
                    placeholder="Total de horas extras"
                />
                <Button
                    title="Calcular"
                    onPress={() => {
                        if (HorasTrabalhadas < 160) {
                            setvalorFinal(SalarioBase)
                        }
                        else if (HorasTrabalhadas > 160) {
                            var horasExtras = HorasTrabalhadas - jornadaNormal
                            var valorHoraExtra = 
                
                        }
                    }}
                />
                <Text style={styles.fontes}>Salário base: {SalarioBase}</Text>
                <Text style={styles.fontes}>Horas trabalhadas: {HorasTrabalhadas}</Text>
                <Text style={styles.fontes}>Salário final: {SalarioFinal}</Text>
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
