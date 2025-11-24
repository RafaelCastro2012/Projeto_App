import { ScrollView, View, Image, StyleSheet, Text } from "react-native";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import morangoDoAmor from '../../res/img/morango.png';
import HeaderProduct from "../components/headerProduct";
import DescriptionProduct from "../components/descriptionProduct";
import ButtonProduct from "../components/buttonProduct";

export default function MorangodoAmor({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>

                    <HeaderProduct
                        productImage={morangoDoAmor}
                        onPressBack={() => navigation.navigate('Home')}
                    />

                    <DescriptionProduct
                        title="MORANGO DO AMOR"
                        description="Morango do amor tradicional coberto por caramelo vermelho, recheado por uma massa de ninho
                        e acompanhado com morango no seu interior."
                    />

                    <ButtonProduct
                        price="R$10,00"
                    />

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}