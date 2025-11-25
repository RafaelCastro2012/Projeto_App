import { ScrollView, View, Image, StyleSheet, Text } from "react-native";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import bombomdeMorango from '../../res/img/bombom.png';
import HeaderProduct from "../components/headerProduct";
import DescriptionProduct from "../components/descriptionProduct";
import ButtonProduct from "../components/buttonProduct";

export default function BombomdeMorango({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>

            <HeaderProduct
                                        productImage={bombomdeMorango}
                                        onPressBack={() => navigation.navigate('Home')}
                                    />
                
                                    <DescriptionProduct
                                        title="BOMBOM DE MORANGO"
                                        description="Bombom coberto por chocolate preto, recheado por brigadeiro preto
                                        ou brigadeiro branco e acompanhado com morango no seu interior."
                                    />
                
                                    <ButtonProduct
                                        price="R$14,00"
                                    />

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