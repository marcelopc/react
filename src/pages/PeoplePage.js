import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';


import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false
    };

  }

  componentDidMount() {
    this.setState({loading: true});
    axios
    .get('https://randomuser.me/api/?nat=BR&results=15')
    .then( response => {
      const { results } = response.data;
      this.setState({
        peoples: results,
        loading:false
      });
    }).catch(error => {
        this.setState({
          loading: false,
          error: true
        });
    });
  }

  preoloader(){
    return (<ActivityIndicator size='large' color='#6ca2f7' />);
  }

  errorOrSucess(){
    return this.state.error ?
    <View style={ styles.containerError }>
      <Text style={ styles.error }>Ops... Algo deu errado !!!!</Text>
    </View>
    : this.renderPeopleList();
  }

  renderPeopleList(){
    return (<PeopleList
      peoples={ this.state.peoples }
      onPressItem={(pageParams) => {this.props.navigation.navigate('PeopleDetail',pageParams);
      }}
    />);
  }

  render() {
    return (
      <View style={ styles.container }>
        {
         this.state.loading ? this.preoloader() : this.errorOrSucess()
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  },
  containerError:{
    flex: 1,
    justifyContent: 'center',
  },
  error:{
    color: 'red',
    textAlign: 'center',
  }
});