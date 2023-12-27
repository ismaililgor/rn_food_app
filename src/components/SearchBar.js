import { React } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather
                name="search"
                // size={30}
                style={styles.iconStyle}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder='Search'
                style={styles.inputStyle}
                value={term}
                // onChangeText={newTerm => onTermChange(newTerm)}
                onChangeText={onTermChange}
                // onEndEditing={() => onTermSubmit()}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;