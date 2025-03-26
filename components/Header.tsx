import type React from "react"
import {TouchableOpacity, StyleSheet, Text, View} from "react-native"
import {Feather, SimpleLineIcons} from '@expo/vector-icons';

type HeaderProps =  {
    onAritziaTap?: () => void
}

const Header: React.FC<HeaderProps> = ({ onAritziaTap = () => {} }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => onAritziaTap?.()}>
                <Text style={styles.logo}>ARITZIA</Text>
            </TouchableOpacity>
            <View style={styles.headerIcons}>
                <Feather name="search" size={24} color="black" style={styles.headerIcon}/>
                <SimpleLineIcons name="bag" size={24} color="black" style={styles.headerIcon}/>
                <Feather name="menu" size={24} color="black" style={styles.headerIcon}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: ''
    },
    headerIcons: {
        flexDirection: 'row',
    },
    headerIcon: {
        marginHorizontal: 8,
    },
})

export default Header
