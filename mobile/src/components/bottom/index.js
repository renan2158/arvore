import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

function Bottom() {
    return (
        <View style={styles.viewBottons}>
            <Image source={require('../../.././assets/img/icon-home.png')} />
            <Image source={require('../../.././assets/img/icon-maos.png')} />
            <Image source={require('../../.././assets/img/icon-book.png')} />
            <Image source={require('../../.././assets/img/icon-lapis.png')} />
            <Image source={require('../../.././assets/img/icon-categorias.png')} />
        </View>
    );
}

export default Bottom;