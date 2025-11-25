import {View, Text} from 'react-native';


export default function DescricaoProduto({
    titulo,
    descricao,
}) {


    return (
        <View>
            <Text style={{ fontFamily: 'PatuaOne-Regular', fontSize: 25, padding: 20, color: "#FFFFFF" }}>{titulo}</Text>
            <Text style={{ fontFamily: 'PatuaOne-StackSansText-VariableFont_wght', fontSize: 20, marginLeft: 20, color: "#FFFFFF" }}>
                {descricao}
            </Text>
        </View>
    )
}