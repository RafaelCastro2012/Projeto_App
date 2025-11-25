import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import quebraQueixo from '../../res/img/quebraqueixo.png';
import DescricaoProduto from "../components/descricaoProduto";
import CabecalhoProduto from "../components/cabecalhoProduto";
import BotaoProduto from "../components/botaoProduto";

export default function QuebraQueixo({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>
                    <CabecalhoProduto
                        imagemProduto={quebraQueixo}
                        botaoVoltar={() => navigation.navigate('Home')}
                    />

                    <DescricaoProduto
                        titulo="QUEBRA-QUEIXO"
                        descricao="Doce de coco caramelizado."
                    />

                    <BotaoProduto
                        preco ="R$12,00"
                    />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}