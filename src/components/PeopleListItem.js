import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { capitalizeFirstLetter } from '../utils'

const PeopleListItem = props => {
    const { people } = props;
    const { thumbnail } = people.picture;
    const { title, first, last } = people.name;
    return (
        <View style={ styles.line }>
            <Image style={ styles.avatar} source={{ uri: thumbnail }} />
            <Text style={ styles.lineText }>
                { `${capitalizeFirstLetter(title)} 
                ${capitalizeFirstLetter(first)} 
                ${capitalizeFirstLetter(last)}` 
                }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        flexDirection: 'row',
        alignItems: 'center',
    },

    lineText:{
        fontSize: 20,
        paddingLeft: 15,
    },

    avatar:{
        aspectRatio: 1,
        width: 200
    }

});

export default PeopleListItem;