import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultLists = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.title} >{title}</Text>
            {/* <Text>Results: {results.length}</Text> */}
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultLists;