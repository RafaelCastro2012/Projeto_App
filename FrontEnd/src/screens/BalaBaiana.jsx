import { ScrollView} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import balaBaiana from '../../res/img/balabaiana.png';
import DescricaoProduto from "../components/descricaoProduto";
import CabecalhoProduto from "../components/cabecalhoProduto";
import BotaoProduto from "../components/botaoProduto";

export default function BalaBaiana({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>
                    <CabecalhoProduto
                        imagemProduto={balaBaiana}
                        botaoVoltar={() => navigation.navigate('Home')}
                    />

                    <DescricaoProduto
                        titulo="BALA BAIANA"
                        descricao="Bala coberta por caramelo, recheado com beijinho."
                    />

                    <BotaoProduto
                        preco="R$5,00"
                    />

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}