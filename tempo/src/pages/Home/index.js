import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

const mylist = [
  {
    "date": "18/03",
    "weekday": "Qui",
    "max": 27,
    "min": 21,
    "description": "Chuvas esparsas",
    "condition": "rain"
  },
  {
    "date": "19/03",
    "weekday": "Sex",
    "max": 28,
    "min": 21,
    "description": "Chuva",
    "condition": "rain"
  },
  {
    "date": "20/03",
    "weekday": "Sáb",
    "max": 29,
    "min": 20,
    "description": "Chuvas esparsas",
    "condition": "rain"
  },
  {
    "date": "21/03",
    "weekday": "Dom",
    "max": 30,
    "min": 21,
    "description": "Chuvas esparsas",
    "condition": "rain"
  },
  {
    "date": "22/03",
    "weekday": "Seg",
    "max": 30,
    "min": 21,
    "description": "Parcialmente nublado",
    "condition": "cloud"
  },
  {
    "date": "23/03",
    "weekday": "Ter",
    "max": 25,
    "min": 24,
    "description": "Tempo limpo",
    "condition": "clear_day"
  }
];

export default function Home() {
  return (
    <SafeAreaView style={ styles.container }>
      <Menu />
      <Header />
      <Conditions />
      <FlatList
        horizontal={ true }
        contentContainerStyle={ { paddingBottom: '5%' } }
        style={ styles.list }
        data={ mylist }
        keyExtractor={ item => item.date }
        renderItem={ ({ item }) => <Forecast data={ item } /> }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '5%'
  },

  list: {
    marginTop: 10,
    marginRight: 11,
  }
})