import * as SplashScreen from 'expo-splash-screen';
import {useCallback, useEffect, useState} from "react";
import * as Font from "expo-font";

const fetchFonts = () => {
    return Font.loadAsync({
        NonSeasonal: require('../assets/fonts/Non-Seasonal_Geo-Medium_web.ttf'),
    })
}

export const useAppLoader = () => {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        const prepare = async () => {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync();
                // Pre-load fonts, make any API calls you need to do here
                await fetchFonts()
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare()
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    return { isAppReady: appIsReady, onReadyCallback: onLayoutRootView }
}