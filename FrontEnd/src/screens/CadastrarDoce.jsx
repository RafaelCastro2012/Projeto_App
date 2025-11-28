import { ScrollView, View, Image, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CabecalhoProduto from "../components/cabecalhoProduto";

export default function Login({navigation}) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#3E3327' }}>
                <ScrollView>
                    <View style={{ flex: 2, alignItems: 'center' , marginTop: 50}}>
                        <TextInput placeholderTextColor={'#3C2C1C'} placeholder="NOME:" style={styles.input} />
                        <TextInput placeholderTextColor={'#3C2C1C'} placeholder="CODIGO:" style={styles.input} />
                        <TextInput placeholderTextColor={'#3C2C1C'} placeholder="PREÇO:" style={styles.input} />
                         <TextInput placeholderTextColor={'#3C2C1C'} placeholder="INGREDIENTES:" style={styles.inputDescricao} />
                         <TextInput placeholderTextColor={'#3C2C1C'} placeholder="DESCRIÇÃO:" style={styles.inputDescricao} />
                        <View style={styles.btn}>
                            <TouchableOpacity style={styles.fundoBotao}>
                                <Text style={styles.fonteCor} onPress={()=> navigation.navigate('Home')}>CADASTRAR</Text>
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
        width: '90%',
        fontFamily: 'PatuaOne-Regular',
        padding: 20
    },

    inputDescricao: {
        backgroundColor: '#EFE6C0',
        borderColor: '#000000',
        borderWidth: 1,
        marginVertical: 20,
        borderRadius: 22,
        fontSize: 20,
        width: '90%',
        fontFamily: 'PatuaOne-Regular',
        height: 100,
        alignContent: "flex-start"
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
    
      