import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import espetoDeMorango from '../../res/img/espetodemorango.png';
import DescricaoProduto from "../components/descricaoProduto";
import CabecalhoProduto from "../components/cabecalhoProduto";
import BotaoProduto from "../components/botaoProduto";

export default function EspetodeMorango({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>
                    <CabecalhoProduto
                        imagemProduto={espetoDeMorango}
                        botaoVoltar={() => navigation.navigate('Home')}
                    />

                    <DescricaoProduto
                        titulo="ESPETO DE MORANGO"
                        descricao="Morango espetado no espeto, coberto por chocolate preto ou branco."
                    />

                    <BotaoProduto
                        preco="R$18,00"
                    />

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}