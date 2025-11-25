import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import miniPudim from '../../res/img/minipudim.png';
import DescricaoProduto from "../components/descricaoProduto";
import CabecalhoProduto from "../components/cabecalhoProduto";
import BotaoProduto from "../components/botaoProduto";

export default function MiniPudim({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>
                    <CabecalhoProduto
                        imagemProduto={miniPudim}
                        botaoVoltar={() => navigation.navigate('Home')}
                    />

                    <DescricaoProduto
                        titulo="MINI PUDIM"
                        descricao="O sabor clássico do pudim de leite acompanhado com calda de caramelo, porção ideal para uma pessoa."
                    />

                    <BotaoProduto
                        preco="R$10,00"
                    />

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}