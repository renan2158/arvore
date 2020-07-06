import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import styles from './styles';
import Bottom from '../../components/bottom';
import EfeitoBackground from '../../components/linearGradient';

function Hanking() {
    return (
        <ScrollView>
            <View style={styles.viewPrincipal}>
                <EfeitoBackground />
                <View style={[styles.viewBackground, { marginTop: 25 }]}>
                    <Text style={{ color: '#000000', fontFamily: 'Comfortaa_400Regular', fontSize: 20, fontWeight: '200' }}>
                        Ranking Geral
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', justifyContent: 'space-evenly', marginTop: 25 }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Comfortaa_400Regular' }}>1º</Text>
                        <Image source={require('../../.././assets/img/icon-hank-1.png')} />
                        <Image style={{ position: 'absolute', top: 70, right: 52 }} source={require('../../.././assets/img/icon-country-1.png')} />
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Comfortaa_400Regular' }}>
                                Manuela
                            </Text>
                            <Text style={{ fontFamily: 'Comfortaa_400Regular' }}>
                                Luz
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: 10, marginRight: 10 }}>
                        <Text style={{ fontFamily: 'Comfortaa_400Regular' }}>2º</Text>
                        <Image source={require('../../.././assets/img/icon-hank-2.png')} />
                        <Image style={{ position: 'absolute', top: 70, right: 52 }} source={require('../../.././assets/img/icon-country-2.png')} />
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Comfortaa_400Regular' }}>
                                Pedro
                            </Text>
                            <Text style={{ fontFamily: 'Comfortaa_400Regular' }}>
                                Phop
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Comfortaa_400Regular' }}>3º</Text>
                        <Image source={require('../../.././assets/img/icon-hank-3.png')} />
                        <Image style={{ position: 'absolute', top: 70, right: 52 }} source={require('../../.././assets/img/icon-country-3.png')} />
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Comfortaa_400Regular' }}>
                                Yasmin
                            </Text>
                            <Text style={{ fontFamily: 'Comfortaa_400Regular' }}>
                                Oliveira
                            </Text>
                        </View>
                    </View>
                    <View style={{ position: 'absolute', right: 8, top: 60 }}>
                        <Image source={require('../../.././assets/img/seta-direita.png')} />
                    </View>
                </View>
                <View style={{ marginTop: 25 }}>
                    <Image source={require('../../.././assets/img/grafico-evolucao.png')} />
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 25 }}>
                    <View style={styles.viewBackground}>
                        <Text style={{ color: '#000000', fontFamily: 'Comfortaa_400Regular', fontSize: 20, fontWeight: '200' }}>
                            Indicados
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center', justifyContent: 'space-between' }}>
                        <Image source={require('../../.././assets/img/seta-esquerda.png')} />
                        <Image source={require('../../.././assets/img/icon-pessoa.png')} />
                        <Image source={require('../../.././assets/img/icon-coracao.png')} />
                        <Text style={{ fontFamily: 'Comfortaa_400Regular' }}>ou</Text>
                        <Image source={require('../../.././assets/img/icon-x.png')} />
                        <Image source={require('../../.././assets/img/icon-usuario.png')} />
                        <Image source={require('../../.././assets/img/seta-direita.png')} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                    <View style={styles.viewNovoAvatar}>
                        <Text style={{ fontSize: 10, color: '#FFFFFF', fontFamily: 'Comfortaa_400Regular' }}>Faltam só 20 páginas para liberar um  novo avatar...</Text>
                    </View>
                </View>
                <View style={styles.viewBackground}>
                    <Text style={{ color: '#000000', fontFamily: 'Comfortaa_400Regular', fontSize: 20, fontWeight: '200' }}>
                        Marcador de Página
                        </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', justifyContent: 'space-between' }}>
                    <Image source={require('../../.././assets/img/livro-1.png')} />
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Image source={require('../../.././assets/img/barra-progresso.png')} />
                        <Text>Parou: 60 - Faltam: 30</Text>
                        <View style={styles.viewCompartilhar}>
                            <Image style={{ position: 'absolute', left: 10 }} source={require('../../.././assets/img/share.png')} />
                            <Text style={{ marginLeft: 2 }}>Compartilhe</Text>
                        </View>
                    </View>
                    <Image source={require('../../.././assets/img/livro-continuar.png')} />
                </View>
                <View>
                    <Bottom />
                </View>
            </View>
        </ScrollView>
    );
};
export default Hanking;