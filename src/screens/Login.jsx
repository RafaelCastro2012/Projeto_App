import { ScrollView, View, Image, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Login({navigation}) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#3E3327' }}>
                <ScrollView>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', minHeight: 250 }}>
                        <Image style={styles.img} source={require('../../res/img/logotcc.png')} />
                    </View>
                    <View style={{ flex: 2, alignItems: 'center' }}>
                        <TextInput placeholderTextColor={'#3C2C1C'} placeholder="E-MAIL:" style={styles.input} />
                        <TextInput placeholderTextColor={'#3C2C1C'} placeholder="SENHA:" style={styles.input} />
                        <View style={styles.btn}>
                            <TouchableOpacity style={styles.fundoBotao}>
                                <Text style={styles.fonteCor} onPress={()=> navigation.navigate('Home')}>ENTRAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                </View>
                </ScrollView>
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
    input: {
        backgroundColor: '#EFE6C0',
        borderColor: '#000000',
        borderWidth: 1,
        marginVertical: 20,
        borderRadius: 22,
        fontSize: 20,
        width: '97%',
        fontFamily: 'PatuaOne-Regular'
    },
    btn: {
        width: 150,
        height: 50,
        marginVertical: 20,
        color: 'black',
    },
    fundoBotao: {
        backgroundColor: '#EFE6C0',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fonteCor: {
        color: '#3C2C1C',
        fontSize: 20,
        fontFamily: 'PatuaOne-Regular'
    },
})