import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import copoDaFelicidade from '../../res/img/copodafelicidade.png';
import DescricaoProduto from "../components/descricaoProduto";
import CabecalhoProduto from "../components/cabecalhoProduto";
import BotaoProduto from "../components/botaoProduto";

export default function CopodaFelicidade({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>
                    <CabecalhoProduto
                        imagemProduto={copoDaFelicidade}
                        botaoVoltar={() => navigation.navigate('Home')}
                    />

                    <DescricaoProduto
                        titulo="COPO DA FELICIDADE"
                        descricao="O Copo da Felicidade consiste em camadas de bolo de chocolate úmido e denso, intercaladas com cremes, creme de chocolate preto e creme de chocolate branco, e na sua ultima camada é acompanhado também por chantilly de chocolate,
                        contendo frutas como morango ou uva verde, ou acompanhamentos, como KitKat, Sonho de Valsa, Ouro Branco, 
                        ou Bis Preto e Bis Branco."
                    />

                    <BotaoProduto
                        preco="R$20,00"
                    />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
