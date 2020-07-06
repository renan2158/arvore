import React from 'react';
import { ScrollView, View, Text, Textarea, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Bottom from '../../components/bottom';
import EfeitoBackground from '../../components/linearGradient';

function Home() {

    const { navigate } = useNavigation();

    return (
        <ScrollView>
            <View style={styles.viewPrincipal}>
                <EfeitoBackground />
                <View style={styles.chatBot}>
                    <View style={styles.messages}>
                        <Text style={{ fontFamily: 'Comfortaa_400Regular' }}>
                            oi, prazer! Sou a arara Jô.
                            vamos bater um papo?
                            em que posso te ajudar?
                        </Text>
                        <Text style={[styles.answers, { fontFamily: 'Comfortaa_400Regular' }]}>

                        </Text>
                        <View style={styles.viewQuestions}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Faça uma pergunta"
                            />
                            <View style={{ right: '40%', top: '2%' }} onPress={() => { alert("fdsfsd") }}>
                                <Image source={require('../../.././assets/img/pergunta-botao.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewArara}>
                        <Image source={require('../../.././assets/img/arara.png')} />
                    </View>
                </View>
                <View style={styles.viewLiga}>
                    <View style={styles.viewBackground}>
                        <Text style={{ color: '#000000', fontFamily: 'Comfortaa_400Regular', fontSize: 20 }}>
                            A liga
                        </Text>
                    </View>
                    <View style={styles.viewHistorico}>
                        <TouchableOpacity onPress={() => navigate('Hanking')}>
                            <View>
                                <Image source={require('../../.././assets/img/grafico-historico.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ width: '50%', position: 'absolute', right: 2 }}>
                            <View style={[styles.viewIndicadosDesafios, { marginBottom: 10 }]}>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'Comfortaa_400Regular' }}>
                                    Indicados
                                </Text>
                            </View>
                            <View style={styles.viewIndicadosDesafios}>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'Comfortaa_400Regular' }}>
                                    Desafios
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.viewDestaques}>
                    <View style={styles.viewBackground}>
                        <Text style={{ color: '#000000', fontFamily: 'Comfortaa_400Regular', fontSize: 20 }}>
                            Destaques
                        </Text>
                    </View>
                    <Image style={{ width: '100%', borderRadius: 15 }} source={require('../../.././assets/img/anti-racismo.png')} />
                </View>
                <View style={styles.viewPagination}>
                    <Image source={require('../../.././assets/img/tela-1.png')} />
                    <Image source={require('../../.././assets/img/tela-next.png')} />
                    <Image source={require('../../.././assets/img/tela-next.png')} />
                </View>
                <View>
                    <Bottom />
                </View>
            </View>
        </ScrollView>
    );
}

export default Home;