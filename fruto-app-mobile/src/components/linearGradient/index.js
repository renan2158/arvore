import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

function EfeitoBackground() {
    return (
        <LinearGradient
            colors={['#31EBA9', 'transparent']}
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: 400,
            }}
        />
    );
}

export default EfeitoBackground;