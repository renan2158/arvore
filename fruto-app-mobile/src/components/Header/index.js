import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function Header() {

    const { navigate } = useNavigation();

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <View style={styles.titleStart}>
                    <TouchableOpacity onPress={() => navigate('Home')}>
                        <Image style={{ marginRight: '8%' }} source={require('../../.././assets/img/logo-A.png')} />
                    </TouchableOpacity>
                    <Text
                        style={{
                            lineHeight: 30,
                            fontSize: 18,
                            color: '#FFFFFF',
                            fontFamily: 'Comfortaa_400Regular'
                        }}
                    >
                        Olá, João kleber
                    </Text>
                </View>
                <View style={styles.titleEnd}>
                    <Image style={styles.user} source={require('../../.././assets/img/icon-user.png')} />
                    <Image source={require('../../.././assets/img/icon-duvidas.png')} />
                </View>
            </View>
        </View>
    );
}

export default Header;