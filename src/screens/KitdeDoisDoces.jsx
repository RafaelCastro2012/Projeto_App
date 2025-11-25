import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import kitDeDoisDoces from '../../res/img/kitDeDoisDoces.jpg';
import DescricaoProduto from "../components/descricaoProduto";
import CabecalhoProduto from "../components/cabecalhoProduto";
import BotaoProduto from "../components/botaoProduto";

export default function KitdeDoisDoces({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>
                    <CabecalhoProduto
                        imagemProduto={kitDeDoisDoces}
                        botaoVoltar={() => navigation.navigate('Home')}
                    />

                    <DescricaoProduto
                        titulo="KIT DE 2 DOCES"
                        descricao="Kit com 2 doces finos, contendo Brigadeiro Preto com granulado, ou com KitKat, contendo Brigadeiro Branco com Uva Verde ou Nuttela,
                        Doce de leite com amendoim, ou Brigadeiro Napolitano."
                    />

                    <BotaoProduto
                        preco="R$15,00"
                    />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}