import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import morangodoAmorMaracuja from '../../res/img/maracujadoamor.jpg';
import DescricaoProduto from "../components/descricaoProduto";
import CabecalhoProduto from "../components/cabecalhoProduto";
import BotaoProduto from "../components/botaoProduto";

export default function MorangodoAmor({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>

                    <CabecalhoProduto
                        imagemProduto={morangodoAmorMaracuja}
                        botaoVoltar={() => navigation.navigate('Home')}
                    />

                    <DescricaoProduto
                        titulo="MORANGO DO AMOR DE MARACUJA"
                        descricao="Morango do amor tradicional coberto por caramelo vermelho, recheado 
                        por uma massa de ninho com maracujá e acompanhado com morango no seu interior."
                    />

                    <BotaoProduto
                        preco ="R$12,00"
                    />

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}