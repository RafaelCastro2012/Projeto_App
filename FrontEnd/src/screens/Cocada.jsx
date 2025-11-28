import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import cocada from '../../res/img/cocada.png';
import DescricaoProduto from "../components/descricaoProduto";
import CabecalhoProduto from "../components/cabecalhoProduto";
import BotaoProduto from "../components/botaoProduto";

export default function Cocada({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>
                    <CabecalhoProduto
                        imagemProduto={cocada}
                        onPressBack={() => navigation.navigate('Home')}
                    />

                    <DescricaoProduto
                        title="COCADA"
                        description="Doce feita com coco fresco ralado. Temos diversos sabores cocada branca ou cocada preta."
                    />

                    <BotaoProduto
                        preco="R$9,00"
                    />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}