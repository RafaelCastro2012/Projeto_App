import { ScrollView, View, Image, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import axios from 'axios';
import { Ionicons } from "@react-native-vector-icons/ionicons";

export default function CadastrarDoce({ navigation }) {

  const [mensagem, setMensagem] = useState('');
  const [preco, setPreco] = useState('');
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

  const formatarParaPreco = (texto) => {
    let textoLimpo = texto.replace(/[^0-9,.]/g, '');

    if (textoLimpo.includes(',')) {
      const partes = textoLimpo.split(',');
      if (partes[1].length > 2) {
        textoLimpo = `${partes[0]},${partes[1].substring(0, 2)}`;
      }
    }

    return textoLimpo;
  };

  const handlePrecoChange = (texto) => {
    const precoFormatado = formatarParaPreco(texto);
    setPreco(precoFormatado);
  };

  const handleCadastrar = async () => {
    if (!formData.nome || !formData.codigo || !formData.preco || !formData.ingredientes || !formData.descricao) {
      setMensagem('Todos os campos são obrigatórios!');
      return;
    }

    try {
      const response = await axios.post('http://10.0.2.2:3002/registrarproduto', formData);

      if (response.status === 201) {
        setFormData({
          nome: '',
          codigo: '',
          preco: '',
          ingredientes: '',
          descricao: '',
        })
        setMensagem('Produto cadastrado com sucesso!!!');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 403) {
          setMensagem('Erro de autenticação ao cadastrar produto!');
        } else {
          console.log(error)
          setMensagem('Erro ao cadastrar produto');
        }
      } else if (error.request) {
        setMensagem('Não foi possível conectar-se ao servidor. Verifique sua conexão ou se a API está ativa.');
      } else {
        setMensagem('Erro inesperado: ' + error.message);
      }
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#3E3327' }}>
        <ScrollView>
          <View>
            <Ionicons style={{ padding: 10, color: "#FFFFFF" }} name="list" size={25} onPress ={() => navigation.navigate('ListarDoce')} />
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
              style={styles.input}
              keyboardType="numeric" // Usa o teclado numérico
              value={formData.preco}
              onChangeText={handlePrecoChange}
              placeholderTextColor={'#3C2C1C'}
              placeholder="PREÇO:"
            />

            {/* <TextInput
                        placeholderTextColor={'#3C2C1C'}
                        placeholder="PRECO:" 
                        style={styles.input}
                        onChangeText={(text) => handleInputChange('preco', text)}
                        value={formData.preco}/> */}

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
              <TouchableOpacity style={styles.fundoBotao} onPress={handleCadastrar}>
                <Text style={styles.fonteCor}>ENTRAR</Text>
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
})