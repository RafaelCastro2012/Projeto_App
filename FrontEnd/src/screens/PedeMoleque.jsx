import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import peDeMoleque from '../../res/img/pedemoleque.jpg';
import DescricaoProduto from "../components/descricaoProduto";
import CabecalhoProduto from "../components/cabecalhoProduto";
import BotaoProduto from "../components/botaoProduto";

export default function PedeMoleque({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>
                    <CabecalhoProduto
                        imagemProduto={peDeMoleque}
                        botaoVoltar={() => navigation.navigate('Home')}
                    />
                    
                    <DescricaoProduto
                        titulo="PÉ DE MOLEQUE"
                        descricao="Doce artesanal à base de amendoim torrado e açúcar caramelizado."
                    />

                    <BotaoProduto
                         preco ="R$9,00"
                    />
    
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}