import {Text} from "@/components/Themed";
import React from "react";
import {ScrollView, SafeAreaView, StyleSheet, TouchableHighlight} from "react-native";

const SECTIONS = [
    {
        name: 'Checkbox',
        path: '(learn)/checkbox'
    }
]

export default function Page() {
    return (
        <SafeAreaView style={styles.flex}>
                <ScrollView style={styles.flex} contentContainerStyle={styles.padding}>
                <Text style={styles.title}>
                    Share Knowledge!
                </Text>

                    {SECTIONS.map(({name, path}) => (
                        <TouchableHighlight key={name} style={styles.item}>
                                <Text style={styles.itemName}>
                                    {name}
                                </Text>
                        </TouchableHighlight>
                    ))}
                </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    padding: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "800",
        marginBottom: 16,
    },
    item: {
        borderRadius: 16,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'rgba(67,160,236,0.11)'
    },
    itemName: {
        fontWeight: "900",
        textTransform: 'uppercase',
        color: 'rgb(67,160,236)'
    }
})