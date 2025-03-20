import {Home, Catalog} from './screens'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import {useState} from 'react'

const Stack = createStackNavigator()

const fetchFonts = () => {
    return Font.loadAsync({
        NonSeasonal: require('./assets/fonts/Non-Seasonal_Geo-Medium_web.ttf'),
    })
}

const App = () => {
    const [fontLoaded, setFontLoaded] = useState(false)

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
                onError={console.warn}
            />
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Catalog" component={Catalog}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App
