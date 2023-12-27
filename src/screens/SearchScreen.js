import { React, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultLists from '../components/resultLists';

const SearchScreen = () => {

    const [term, setTerm] = useState('');

    const [results, errorMessage, searchApi] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                // onTermChange={setTerm()}
                // onTermSubmit={() => console.log('term was submitted')}
                onTermSubmit={() => searchApi(term)}
            />
            {/* <Text>{errorMessage}</Text> */}
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResultLists results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultLists results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultLists results={filterResultsByPrice('$$$')} title="Big Spender" />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;