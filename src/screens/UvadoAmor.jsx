import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import uvaDoAmor from '../../res/img/uvadoamor.png';
import DescricaoProduto from "../components/descricaoProduto";
import CabecalhoProduto from "../components/cabecalhoProduto";
import BotaoProduto from "../components/botaoProduto";

export default function UvadoAmor({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>
                    <CabecalhoProduto
                        imagemProduto={uvaDoAmor}
                        botaoVoltar={() => navigation.navigate('Home')}
                    />

                    <DescricaoProduto
                        titulo="UVA DO AMOR"
                        descricao="Uva do amor tradicional coberto por caramelo verde, recheado por uma massa de ninho
                        e acompanhado com uva verde no seu interior."
                    />

                    <BotaoProduto
                        preco ="R$10,00"
                    />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}