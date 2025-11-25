import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import kitDeTresDoces from '../../res/img/kitDeTres.png';
import DescricaoProduto from "../components/descricaoProduto";
import CabecalhoProduto from "../components/cabecalhoProduto";
import BotaoProduto from "../components/botaoProduto";


export default function KitdeDoisDoces({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>
                    <CabecalhoProduto
                        imagemProduto={kitDeTresDoces}
                        botaoVoltar={() => navigation.navigate('Home')}
                    />

                    <DescricaoProduto
                        titulo="KIT DE 3 DOCES"
                        descricao="Kit com 3 doces finos, contendo Brigadeiro Preto com granulado, ou com KitKat, contendo Brigadeiro Branco com Uva Verde ou Nuttela,
                        Doce de leite com amendoim, ou Brigadeiro Napolitano."
                    />

                    <BotaoProduto
                        preco="R$20,00"
                    />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}