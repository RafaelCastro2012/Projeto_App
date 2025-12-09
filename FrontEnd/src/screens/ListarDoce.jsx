import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, FlatList, Alert, Image, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Ionicons } from "@react-native-vector-icons/ionicons";

const Listar = ({ navigation }) => {
    const [doce, setDoce] = useState([]);

    const carregarDoces = () => {
        axios.get('http://10.0.2.2:3001/listar')
            .then(response => {
                const docesData = response.data.sort((a, b) => a.id - b.id);

                console.log("doceeeeeesss", docesData);
                setDoce(docesData);
            })
            .catch(error => {
                console.log(JSON.stringify(error));
            });
    };

    useEffect(() => {
        carregarDoces();
    }, []);

    const handleAtualizar = (id) => {
        navigation.navigate('AtualizarDoce', { id });
    };

    const handleDeletar = (id) => {
        Alert.alert(
            'Confirmar Exclusão',
            'Tem certeza que deseja excluir essa reserva?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: () => {
                        axios.delete(`http://10.0.2.2:3001/excluirProduto/${id}`)
                            .then(() => {
                                Alert.alert('Sucesso', 'Produto excluído com sucesso.');
                                carregarDoces();
                            })
                            .catch(error => {
                                console.log(error);
                                Alert.alert('Erro', 'Erro ao excluir produto.');
                                console.log(error);
                            });
                    }
                }
            ]
        );
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.nome}</Text>
            <View style={styles.actionButtons}>

                <TouchableOpacity
                    onPress={() => handleAtualizar(item.id)}>
                    <Ionicons name="pencil-sharp" size={30} color="#000000" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleDeletar(item.id)}>
                    <Ionicons name="trash-outline" size={30} color="#000000" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#3E3327' }}>

                <View style={{ height: 125, width: 50, flexDirection: "row" }}>
                    <Image style={styles.img} source={require('../../res/img/logotcc.png')} />
                </View>

                <View style={styles.inputBoxContainer} >
                    <Ionicons name="search" size={20} />
                    <TextInput placeholderTextColor={'#000000'} placeholder="Pesquisar:" style={styles.input} />
                </View>

                <FlatList
                    data={doce}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    style={styles.list}
                />
            </SafeAreaView>
        </SafeAreaProvider>

    );
};

const styles = StyleSheet.create({
    img: {
        marginTop: 30,
        marginLeft: 15,
        width: 100,
        height: 100
    },
    inputBoxContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 20,
        width: '95%',
        marginLeft: 10,
        marginTop: 20,
        paddingHorizontal: 10
    },
    input: {
        fontSize: 20,
        fontFamily: 'PatuaOne-Regular',
        flex: 1,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#F3EAC3',
        paddingVertical: 10,
        borderBottomWidth: 1,
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20,
    },

    itemText: {
        color: '#000000',
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'PatuaOne-Regular',
        width: '53%',
    },
    actionButtons: {
        marginLeft: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    fonteCor: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'PatuaOne-Regular',
        marginBottom: 20,
        alignSelf: 'center'
    },
});
export default Listar;
