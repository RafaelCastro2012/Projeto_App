import { ScrollView, View, Image, StyleSheet, Text } from "react-native";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import peDeMoleque from '../../res/img/pedemoleque.jpg';
import HeaderProduct from "../components/headerProduct";
import DescriptionProduct from "../components/descriptionProduct";
import ButtonProduct from "../components/buttonProduct";

export default function PedeMoleque({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>
                    <View>
                        <Ionicons style={{ padding: 10, color: "#FFFFFF" }} name="arrow-back" size={25} onPress={() => navigation.navigate('Home')} />
                        <Image style={styles.imgProdutos} source={peDeMoleque} />
                    </View>

                    <View>
                        <Text style={{ fontFamily: 'PatuaOne-Regular', fontSize: 25, padding: 20, color: "#FFFFFF" }}>PÉ DE MOLEQUE</Text>
                        <Text style={{ fontFamily: 'PatuaOne-StackSansText-VariableFont_wght', fontSize: 20, marginLeft: 20, color: "#FFFFFF" }}>
                             Doce artesanal à base de amendoim torrado e açúcar caramelizado.
                        </Text>
                    </View>

                    <View style={{ padding: 17 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.cardPreco}>
                                <Text style={{ fontFamily: 'PatuaOne-Regular', textAlign: 'center', fontSize: 18, padding: 12, color: '#ffffff'}}>R$9,00</Text>
                            </View>

                            <View style={styles.inputBoxContainer} >
                            <Ionicons name="logo-whatsapp" size={30} color={'#ffffff'} />
                            <View>
                                <Text style={{ fontFamily: 'PatuaOne-Regular', textAlign: 'center', fontSize: 18, padding: 12, color: '#ffffff' }}>Whatsapp</Text>
                            </View>
                            </View>
                            
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    imgProdutos: {
        maxWidth: '100%',
        height: 400,
        borderRadius: 20
    },
    cardPreco: {
        width: 125,
        height: 50,
        borderRadius: 20,
        backgroundColor: "#EF2A39",
        margin: 10,
        marginLeft: 5,
    },
    inputBoxContainer: {
        marginTop: 9 ,
        width: 185,
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#3C2F2F',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 20,
        width: '40%',
        marginLeft: 10,
        paddingHorizontal: 10,
        marginLeft: 75,
    },
})