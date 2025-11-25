import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { ScrollView, View, Image, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";

export default function ListarDoce() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#3E3327' }}>
                <View style={{ minHeight: 120, flexDirection: "row" }}>
                    <Image style={styles.img} source={require('../../res/img/logotcc.png')} />
                </View>

                <View style={styles.inputBoxContainer} >
                    <Ionicons name="search" size={20} />
                    <TextInput placeholderTextColor={'#000000'} placeholder="Pesquisar:" style={styles.input} />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    img: {
        marginTop: 30,
        marginLeft: 15,
        width: 100,
        height: 100
    },
    inputBoxContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 20,
        width: '95%',
        marginLeft: 10,
        marginTop: 20,
        paddingHorizontal: 10
    },
    input: {
        fontSize: 20,
        fontFamily: 'PatuaOne-Regular',
    },
})