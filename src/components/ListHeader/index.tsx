import React from "react"
import { View, Text } from "react-native"

import { styles } from "./styles"

type Props = {
    title: string,
    subtitle: string,
}

export function ListHeader({title, subtitle} : Props) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            <View>
                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>
            </View>
        </View>
    )
}