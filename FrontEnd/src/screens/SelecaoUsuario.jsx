import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function SelecaoUsuario({ navigation }) {
    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: '#3E3327' }}>
            <SafeAreaView>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', minHeight: 250, padding: 100 }}>
                    <Image style={styles.img} source={require('../../res/img/logotcc.png')} />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={styles.botoes}>
                        <Text style={styles.fonteCor}> ENTRAR COMO USUARIO </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.botoes}>
                        <Text style={styles.fonteCor}> ENTRAR COMO ADMINISTRADOR </Text>
                    </View>
                </TouchableOpacity>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    img: {
        marginTop: 10,
        width: 200,
        height: 200,
    },
    botoes: {
        justifyContent: 'center',
        width: 300,
        height: 100,
        borderRadius: 20,
        backgroundColor: "#EFE6C0",
        marginLeft: 50, 
        alignItems: 'center',
        marginTop: 30,
        marginBlock: 30,
        },
    fonteCor: {
        color: '#3C2C1C',
        fontSize: 20,
        fontFamily: 'PatuaOne-Regular',
        textAlign: "center",
        marginTop: 10
    },
})