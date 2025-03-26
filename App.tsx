import {Home, Catalog} from './screens'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import type { RootStackParamList } from './types'
import {useAppLoader} from "./hooks/useAppLoader";

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
    const { isAppReady, onReadyCallback } = useAppLoader()

    if (!isAppReady) return null;

    return (
        <NavigationContainer onReady={onReadyCallback}>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Catalog" component={Catalog}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
