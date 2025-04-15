import { View, StyleSheet } from 'react-native';

const tabuleiro = () => {
    return (
        <View style={styles.principal}>
            <View style={styles.container}>
                <View style={styles.black}></View>
                <View style={styles.white}></View>
                <View style={styles.black}></View>
                <View style={styles.white}></View>
            </View>
            <View style={styles.container}>
                <View style={styles.white}></View>
                <View style={styles.black}></View>
                <View style={styles.white}></View>
                <View style={styles.black}></View>
            </View>
            <View style={styles.container}>
                <View style={styles.black}></View>
                <View style={styles.white}></View>
                <View style={styles.black}></View>
                <View style={styles.white}></View>
            </View>
            <View style={styles.container}>
                <View style={styles.white}></View>
                <View style={styles.black}></View>
                <View style={styles.white}></View>
                <View style={styles.black}></View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    principal: {
        paddingTop: 150,
    },
    container: {
        color: 'red',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    black: {
        backgroundColor: 'black',
        height: 100,
        width: 100,
        borderColor: 'black',
        borderWidth: 1
    },
    white: {
        backgroundColor: 'white',
        height: 100,
        width: 100,
        borderColor: 'black',
        borderWidth: 1
    },
})
export default tabuleiro;