import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import brownie from '../../res/img/brownie.png';
import DescricaoProduto from "../components/descricaoProduto";
import CabecalhoProduto from "../components/cabecalhoProduto";
import BotaoProduto from "../components/botaoProduto";

export default function Brownie({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>
                    <CabecalhoProduto
                        imagemProduto={brownie}
                        botaoVoltar={() => navigation.navigate('Home')}
                    />

                    <DescricaoProduto
                        title="BROWNIE"
                        description="Massa de brownie, com sabor intenso de chocolate, 
                        com diferentes tipos de recheios, como brigadeiro e Nutella."
                    />

                    <BotaoProduto
                        preco="R$10,00"
                    />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
