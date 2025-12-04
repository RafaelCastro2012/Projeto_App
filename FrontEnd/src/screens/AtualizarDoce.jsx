import { ScrollView, View, Image, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import axios from 'axios';

const AtualizarDoce = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [codigo, setCodigo] = useState('');
    const [preco, setPreco] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleAtualizar = async () => {
        if (!nome || !codigo || !preco || !ingredientes || !descricao) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        const data = {
            nome,
            codigo,
            preco,
            ingredientes,
            descricao
        };

        try {
            const response = await axios.put(`http://10.0.2.2:3001/editarProduto/${id}`, data)

            if (response.status === 200) {
                Alert.alert('Sucesso', 'Usuário atualizado com sucesso!');
                setNome('');
                setCodigo('');
                setPreco('');
                setIngredientes('');
                setDescricao('');
                navigation.navigate('ListarDoce');
            }
        }
        catch (error) {
            if (error.response && error.response.status === 404) {
                Alert.alert('Erro', 'ID do produto não encontrado na base de dados.');
            } else {
                Alert.alert('Erro', 'Ocorreu um erro ao atualizar o produto. Por favor, tente novamente.');
                console.log(error);
            }
        };
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#3E3327' }}>
                <ScrollView>
                    <View style={{ flex: 2, alignItems: 'center' }}>
                        <TextInput
                            placeholderTextColor={'#3C2C1C'}
                            placeholder="NOME:"
                            style={styles.input}
                            onChangeText={(text) => handleInputChange('nome', text)}
                            value={nome} />

                        <TextInput
                            placeholderTextColor={'#3C2C1C'}
                            placeholder="CODIGO:"
                            style={styles.input}
                            onChangeText={(text) => handleInputChange('codigo', text)}
                            value={codigo} />

                        <TextInput
                            placeholderTextColor={'#3C2C1C'}
                            placeholder="PRECO:"
                            style={styles.input}
                            onChangeText={(text) => handleInputChange('preco', text)}
                            value={preco} />

                        <TextInput
                            placeholderTextColor={'#3C2C1C'}
                            placeholder="INGREDIENTES:"
                            style={styles.inputText}
                            onChangeText={(text) => handleInputChange('ingredientes', text)}
                            value={ingredientes} />

                        <TextInput
                            placeholderTextColor={'#3C2C1C'}
                            placeholder="DESCRIÇÃO:"
                            style={styles.inputText}
                            onChangeText={(text) => handleInputChange('descricao', text)}
                            value={descricao} />

                        <View style={styles.btn}>
                            <TouchableOpacity style={styles.fundoBotao} onPress={handleAtualizar}>
                                <Text style={styles.fonteCor}>ATUALIZAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default AtualizarDoce;

const styles = StyleSheet.create({
    img: {
        marginTop: 10,
        width: 200,
        height: 200,
    },
    input: {
        backgroundColor: '#EFE6C0',
        borderColor: '#000000',
        borderWidth: 1,
        marginVertical: 20,
        borderRadius: 22,
        fontSize: 20,
        width: '97%',
        fontFamily: 'PatuaOne-Regular'
    },
    inputText: {
        backgroundColor: '#EFE6C0',
        borderColor: '#000000',
        borderWidth: 1,
        marginVertical: 20,
        borderRadius: 22,
        fontSize: 20,
        width: '97%',
        fontFamily: 'PatuaOne-Regular',
        height: 150,
    },
    btn: {
        width: 150,
        height: 50,
        marginVertical: 20,
        color: 'black',
    },
    fundoBotao: {
        backgroundColor: '#EFE6C0',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fonteCor: {
        color: '#3C2C1C',
        fontSize: 20,
        fontFamily: 'PatuaOne-Regular'
    },
});