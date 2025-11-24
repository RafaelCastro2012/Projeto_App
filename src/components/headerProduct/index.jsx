import { View, Image, StyleSheet } from "react-native";
import { Ionicons } from "@react-native-vector-icons/ionicons";


// Componente reutilizável de header para TODOS os produtos
// Esse componente recebe como parâmetro a imagem do produto e a ação de voltar
export default function HeaderProduct({
    productImage, // Aqui eu defino a imagem do produto no Header
    onPressBack // Aqui eu defino a ação de voltar do icone
}) {


    return (
        <View>
            <Ionicons style={{ padding: 10, color: "#FFFFFF" }} name="arrow-back" size={25} onPress={onPressBack} />
            <Image style={styles.imgProdutos} source={productImage} />
        </View>
    )
}


const styles = StyleSheet.create({
    imgProdutos: {
        maxWidth: '100%',
        height: 400,
        borderRadius: 20
    }
 });