import { ScrollView} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import cocadaCremosadeMaracuja from '../../res/img/cocadacremosademaracuja.jpg';
import DescricaoProduto from "../components/descricaoProduto";
import CabecalhoProduto from "../components/cabecalhoProduto";
import BotaoProduto from "../components/botaoProduto";

export default function CocadaCremosadeMaracuja({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#4F4132' }}>
                <ScrollView>
                    <CabecalhoProduto
                        imagemProduto={cocadaCremosadeMaracuja}
                        botaoVoltar={() => navigation.navigate('Home')}
                    />

                    <DescricaoProduto
                        titulo="COCADA CREMOSA DE MARACUJÁ"
                        descricao="Um doce cremoso, de cocada com leite condensado, acompanhado com geleia de maracujá."
                    />

                    <BotaoProduto
                        preco="R$12,00"
                    />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
