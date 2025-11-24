import {View, Text} from 'react-native';
import { StyleSheet } from 'react-native';
import { Ionicons } from "@react-native-vector-icons/ionicons";


export default function ButtonProduct({ 
    price,
}) {

    return (
        <View style={{ padding: 17 }}>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.cardPreco}>
                    <Text style={{ fontFamily: 'PatuaOne-Regular', textAlign: 'center', fontSize: 18, padding: 12, color: '#ffffff' }}>{price}</Text>
                </View>

                <View style={styles.inputBoxContainer} >
                    <Ionicons name="logo-whatsapp" size={30} color={'#ffffff'} />
                    <View> 
                        //TODO: Adicionar clique para wpp
                        <Text style={{ fontFamily: 'PatuaOne-Regular', textAlign: 'center', fontSize: 18, padding: 12, color: '#ffffff' }}>Whatsapp</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardPreco: {
        width: 125,
        height: 50,
        borderRadius: 20,
        backgroundColor: "#EF2A39",
        margin: 10,
        marginLeft: 5,
    },
    inputBoxContainer: {
        marginTop: 9 ,
        width: 185,
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#3C2F2F',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 20,
        width: '40%',
        marginLeft: 10,
        paddingHorizontal: 10,
        marginLeft: 75,
    },
})