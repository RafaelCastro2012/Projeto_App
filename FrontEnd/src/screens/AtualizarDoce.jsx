import { ScrollView, View, Image, StyleSheet, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import axios from 'axios';
import { Ionicons } from "@react-native-vector-icons/ionicons";

const AtualizarDoce = ({ navigation, route }) => {
    const { id } = route.params;

    const [nome, setNome] = useState('');
    const [codigo, setCodigo] = useState('');
    const [preco, setPreco] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [descricao, setDescricao] = useState('');
    const [formData, setFormData] = useState({
        nome: '',
        codigo: '',
        preco: '',
        ingredientes: '',
        descricao: '',
    });

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleAtualizar = async () => {
        if (!formData.nome || !formData.codigo || !formData.preco || !formData.ingredientes || !formData.descricao) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        
        const data = {
            nome: formData.nome,
            codigo: formData.codigo,
            preco:formData.preco,
            ingredientes: formData.ingredientes,
            descricao: formData.descricao
        };

        try {
            const response = await axios.put(`http://10.0.2.2:3001/editarProduto/${id}`, data)

            if (response.status === 200) {
                Alert.alert('Sucesso', 'Produto atualizado com sucesso!');
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
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('CadastrarDoce')}>
                            <Ionicons style={{ padding: 10, color: "#FFFFFF", height: 50, width: 50 }} name="arrow-back" size={25} onPress={() => navigation.navigate('ListarDoce')} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.fonte}>ATUALIZAR PRODUTO</Text>
                    </View>

                    <View style={{ flex: 2, alignItems: 'center' }}>
                        <TextInput
                            placeholderTextColor={'#3C2C1C'}
                            placeholder="NOME:"
                            style={styles.input}
                            onChangeText={(text) => handleInputChange('nome', text)}
                            value={formData.nome} />

                        <TextInput
                            placeholderTextColor={'#3C2C1C'}
                            placeholder="CODIGO:"
                            style={styles.input}
                            onChangeText={(text) => handleInputChange('codigo', text)}
                            value={formData.codigo} />

                        <TextInput
                            placeholderTextColor={'#3C2C1C'}
                            placeholder="PRECO:"
                            style={styles.input}
                            onChangeText={(text) => handleInputChange('preco', text)}
                            value={formData.preco}
                            keyboardType="numeric" />

                        <TextInput
                            placeholderTextColor={'#3C2C1C'}
                            placeholder="INGREDIENTES:"
                            style={styles.inputText}
                            onChangeText={(text) => handleInputChange('ingredientes', text)}
                            value={formData.ingredientes} />

                        <TextInput
                            placeholderTextColor={'#3C2C1C'}
                            placeholder="DESCRIÇÃO:"
                            style={styles.inputText}
                            onChangeText={(text) => handleInputChange('descricao', text)}
                            value={formData.descricao} />

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
    fonte: {
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'PatuaOne-Regular',
        marginBottom: 20,
        alignSelf: 'center'
    },
});