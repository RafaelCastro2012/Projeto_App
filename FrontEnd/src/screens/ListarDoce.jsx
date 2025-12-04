import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AtualizarProduto from './AtualizarDoce';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity, ScrollView, Image, Pressable } from 'react-native';
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
                    style={styles.iconButton}
                    onPress={() => handleAtualizar(item.id)}>
                    <Ionicons name="create-outline" size={22} color="#000000" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => handleDeletar(item.id)}
                >
                    <Ionicons name="trash-outline" size={22} color="#000000" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#3E3327' }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('CadastrarDoce')}>
                            <Ionicons style={{ padding: 10, color: "#FFFFFF", height: 50, width: 50 }} name="add-circle" size={25} onPress={() => navigation.navigate('CadastrarDoce')} />
                        </TouchableOpacity>
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
    imageContainer: {
        marginTop: 10,
        marginBottom: 10
    },
    image: {
        width: 87,
        height: 87
    },
    corpo: {
        flex: 1,
    },
    list: {
        width: '100%'
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        alignItems: 'center',
    },
    itemText: {
        color: 'black',
        flex: 1,
        textAlign: 'center',
        fontSize: 10,
    },
    actionButtons: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconButton: {
        padding: 6,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20,
    },
});

export default Listar;
