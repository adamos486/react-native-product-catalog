import React from 'react'
import {Text, StyleSheet} from 'react-native'


const NonSeasText = ({style, children, ...props}: { style: [], children: any, props: [] }) => {
    return (
        <Text style={[styles.text, style]} {...props}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Non-Seasonal'
    }
})
