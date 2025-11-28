import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import peDeMolequeNinho from '../../res/img/pedemolequeninho.jpg';
import DescricaoProduto from "../components/descricaoProduto";
import CabecalhoProduto from "../components/cabecalhoProduto";
import BotaoProduto from "../components/botaoProduto";

export default function PedeMolequeNinho({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>
                    <CabecalhoProduto
                        imagemProduto={peDeMolequeNinho}
                        botaoVoltar={() => navigation.navigate('Home')}
                    />

                    <DescricaoProduto
                        titulo="PÉ DE MOLEQUE DE NINHO"
                        descricao="Doce artesanal à base de amendoim torrado, açúcar caramelizado, e leite ninho, após o preparo é passado no leite ninho."
                    />

                    <BotaoProduto
                         preco ="R$9,00"
                    />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}