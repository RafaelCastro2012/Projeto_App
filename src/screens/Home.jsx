//Nome: Rafael Ribiero de Castro
//Projeto: Cardápio Digital
//Fonte: 
// https://www.youtube.com/watch?v=GCklpu54Mlk
//https://www.youtube.com/watch?v=BxlDrVDc0Rc&t=620s

import { ScrollView, View, Image, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@react-native-vector-icons/ionicons";

//Import de exemplo em uma variável da imagem morango 
import morangoDoAmor from '../../res/img/morango.png';
import bombomdeMorango from '../../res/img/bombom.png';
import balaBaiana from '../../res/img/balabaiana.png';
import uvaDoAmor from '../../res/img/uvadoamor.png';
import miniPudim from '../../res/img/minipudim.png';
import cocada from '../../res/img/cocada.png';
import espetoDeMorango from '../../res/img/espetodemorango.png';
import copoDaFelicidade from '../../res/img/copodafelicidade.png';
import brownie from '../../res/img/brownie.png';
import balaBaianaDeMaracuja from '../../res/img/balabaianademaracuja.jpg';
import morangoDoAmorDeMaracuja from '../../res/img/maracujadoamor.jpg';
import paoDeMel from '../../res/img/paoDeMel.png';
import olhoDeSogra from '../../res/img/olhodesogra.jpg';
import quebraQueixo from '../../res/img/quebraqueixo.png';
import peDeMolequeNinho from '../../res/img/pedemolequeninho.jpg';
import peDeMoleque from '../../res/img/pedemoleque.jpg';
import kitDeTresDoces from '../../res/img/kitDeTres.png';
import kitDeDoisDoces from '../../res/img/kitDeDoisDoces.jpg';
import cocadaCremosa from '../../res/img/cocadacremosa.jpg';
import cocadaCremosaMaracuja from '../../res/img/cocadacremosademaracuja.jpg';



export default function Home({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#3E3327' }}>
                <ScrollView>
                    <View style={{ minHeight: 120, flexDirection: "row" }}>
                        <Image style={styles.img} source={require('../../res/img/logotcc.png')} />
                    </View>

                    <View style={styles.inputBoxContainer} >
                    <Ionicons name="search" size={20} />
                        <TextInput placeholderTextColor={'#000000'} placeholder="Pesquisar:" style={styles.input} />
                    </View>

                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ flexDirection: "row" }} >
                                <View style={styles.botoes}>
                                    <Text style={styles.fonteCor}> MORANGO </Text>
                                </View>
                                <View style={styles.botoes}>
                                    <Text style={styles.fonteCor}> COCO </Text>
                                </View>
                                <View style={styles.botoes}>
                                    <Text style={styles.fonteCor}> KITS </Text>
                                </View>
                                <View style={styles.botoes}>
                                    <Text style={styles.fonteCor}> UVA </Text>
                                </View>
                                <View style={styles.botoes}>
                                    <Text style={styles.fonteCor}> POTS </Text>
                                </View>
                                <View style={styles.botoes}>
                                    <Text style={styles.fonteCor}> AMENDOIM </Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>

                    {/* Cards dos doces */}
                    <View style={styles.titulo}>
                        <Text style={styles.fonteTitulo}> DOCES DE MORANGO</Text>
                    </View>

                <View style={{ flexDirection: "row" }}>

                     <TouchableOpacity onPress={() => navigation.navigate('MorangodoAmor')}>
                        <View style={styles.cards} >
                            <Image style={styles.imgProdutos} source={morangoDoAmor} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 10}}>MORANGO DO AMOR</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('BombomdeMorango')}>
                        <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={bombomdeMorango} />
                            <Text style={styles.descricaoProduto}>BOMBOM DE MORANGO</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                    <View style={{ flexDirection: "row" }}>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('EspetodeMorango')}>
                        <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={espetoDeMorango} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding:10}}>ESPETO DE MORANGO</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('MorangodoAmordeMaracuja')}>
                        <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={morangoDoAmorDeMaracuja} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 7}}>MORANGO DO AMOR DE MARACUJA</Text>
                        </View>
                    </TouchableOpacity>

                    </View>

                    <View style={styles.titulo}>
                        <Text style={styles.fonteTitulo}> DOCES DE COCO</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity onPress={() => navigation.navigate('BalaBaiana')}>
                    <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={balaBaiana} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 20}}>BALA BAIANA</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Cocada')}>
                    <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={cocada} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 20}}>COCADA</Text>
                    </View>
                    </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: "row" }}>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('BalaBaianadeMaracuja')}>
                        <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={balaBaianaDeMaracuja} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 10}}>BALA BAIANA DE MARACUJA</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('QuebraQueixo')}>
                        <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={quebraQueixo} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 18}}>QUEBRA-QUEIXO</Text>
                        </View>
                    </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity onPress={() => navigation.navigate('OlhodeSogra')}>
                    <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={olhoDeSogra} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 18}}>OLHO DE SOGRA</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('CocadaCremosa')}>
                    <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={cocadaCremosa} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 15}}>COCADA CREMOSA</Text>
                    </View>
                    </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity onPress={() => navigation.navigate('CocadaCremosaMaracuja')}>
                    <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={cocadaCremosaMaracuja} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 10}}>COCADA CREMOSA DE MARACUJA</Text>
                        </View>
                    </TouchableOpacity>

                    </View>

                    <View style={styles.titulo}>
                        <Text style={styles.fonteTitulo}> DOCES NO POTE</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity onPress={() => navigation.navigate('Brownie')}>
                    <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={brownie} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 10}}>BROWNIE COM NUTELLA</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('PaodeMel')}>
                        <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={paoDeMel} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 20}}>PÃO DE MEL</Text>
                        </View>
                    </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('CopodaFelicidade')}>
                        <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={copoDaFelicidade} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 10}}>COPO DA FELICIDADE</Text>
                        </View>
                    </TouchableOpacity>

                   
                     <TouchableOpacity onPress={() => navigation.navigate('MiniPudim')}>
                        <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={miniPudim} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 20}}>MINI PUDIM</Text>
                        </View>
                     </TouchableOpacity>
                    </View>

                    <View style={styles.titulo}>
                        <Text style={styles.fonteTitulo}> KIT DE DOCES</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity onPress={() => navigation.navigate('KitdeTresDoces')}>
                        <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={kitDeTresDoces} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 20}}>KIT DE 3 DOCES</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('KitdeDoisDoces')}>
                        <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={kitDeDoisDoces} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 20}}>KIT DE 2 DOCES</Text>
                        </View>
                    </TouchableOpacity>

                    </View>

                    <View style={styles.titulo}>
                        <Text style={styles.fonteTitulo}>DOCES DE AMENDOIM</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity onPress={() => navigation.navigate('PedeMoleque')}>
                        <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={peDeMoleque} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 20}}>PÉ DE MOLEQUE</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('PedeMolequeNinho')}>
                        <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={peDeMolequeNinho} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 12}}>PÉ DE MOLEQUE DE NINHO</Text>
                        </View>
                    </TouchableOpacity>

                    </View>
                    <View style={styles.titulo}>
                        <Text style={styles.fonteTitulo}> DOCES DE UVA</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('UvadoAmor')}>
                    <View style={styles.cards}>
                            <Image style={styles.imgProdutos} source={uvaDoAmor} />
                            <Text style={{fontFamily: 'PatuaOne-Regular',textAlign: 'center',fontSize: 18,padding: 20}}>UVA DO AMOR</Text>
                    </View>
                    </TouchableOpacity>
                    
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )

}

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
    },
    botoes: {
        width: 116,
        height: 49,
        borderRadius: 20,
        backgroundColor: "#EFE6C0",
        margin: 10
    },
    fonteCor: {
        color: '#3C2C1C',
        fontSize: 20,
        fontFamily: 'PatuaOne-Regular',
        textAlign: "center",
        marginTop: 10
    },
    cards: {
        width: 185,
        height: 225,
        borderRadius: 20,
        backgroundColor: "#EFE6C0",
        margin: 10
    },
    imgProdutos: {
        maxWidth: 185,
        height: 159,
        borderRadius: 20
    },
    descricaoProduto: {
        fontFamily: 'PatuaOne-Regular',
        textAlign: 'center',
        fontSize: 18,
        padding: 5,
    },
    titulo: {
        width:'55%',
        height: 40,
        backgroundColor: '#EFE6C0',
        borderRadius: 20,
        marginLeft: 10,
        marginTop: 30,
        marginBottom:10
    },
    fonteTitulo: {
        fontFamily: 'PatuaOne-Regular',
        fontSize: 20,
        padding: 7,
    }
})