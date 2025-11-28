import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import balaBaianaDeMaracuja from '../../res/img/balabaianademaracuja.jpg';
import DescricaoProduto from "../components/descricaoProduto";
import CabecalhoProduto from "../components/cabecalhoProduto";
import BotaoProduto from "../components/botaoProduto";

export default function BalaBaianadeMaracuja({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>
                    <CabecalhoProduto
                        imagemProduto={balaBaianaDeMaracuja}
                        botaoVoltar={() => navigation.navigate('Home')}
                    />

                    <DescricaoProduto
                        title="BALA BAIANA DE MARACUJA"
                        description="Bala coberta por caramelo, recheado com beijinho."
                    />

                    <BotaoProduto
                        preco="R$5,00"
                    />

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}