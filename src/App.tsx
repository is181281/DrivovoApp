import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
    'montserrat': require('./assets/fonts/Montserrat.ttf'),
});

export default function App() {
    const [ fontsLoaded, setFontsLoaded ] = useState(false);
    return (
        fontsLoaded
            ? (
                <Navigator/>
            )
            : (
                <AppLoading
                    startAsync={getFonts}
                    onFinish={() => setFontsLoaded(true)}
                />
            )
    );
}

/*
 import {StatusBar} from 'expo-status-bar';
 <StatusBar style="auto" />
 */
