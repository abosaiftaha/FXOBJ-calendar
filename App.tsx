import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {Calendar} from './components';

const App = () => {
    return (
        <SafeAreaView
            style={{
                backgroundColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
            }}>
            <Calendar />
        </SafeAreaView>
    );
};

export default App;
