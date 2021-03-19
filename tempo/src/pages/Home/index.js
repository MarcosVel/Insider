import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import * as Location from 'expo-location';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

import api, { key } from '../../services/api';

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
  const [ errorMsg, setErrorMsg ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ weather, setWeather ] = useState([]);
  const [ icon, setIcon ] = useState({ name: "cloud", color: "#fff" });
  const [ background, setBackground ] = useState([ '#1ed6ff', '#97c1ff' ]);

  useEffect(() => {

    // buscar localização do usuário ao entrar
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      if (status != 'granted') {
        setErrorMsg('Permissão de localização negada!');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // console.log(location.coords);

      const response = await api.get(`/weather?key=${ key }&lat=${ location.coords.latitude }&lon=${ location.coords.longitude }`);

      setWeather(response.data);

      if (response.data.results.currently === 'noite') {
        setBackground([ '#0c3741', '#0f2f61' ])
      }

      switch (response.data.results.condition_slug) {
        case 'storm':
          setIcon({
            name: "thunderstorm-outline",
            color: '#1ec9ff',
          });
          break;

        case 'clear_day':
          setIcon({
            name: "sunny-outline",
            color: '#FFB300'
          });
          break;

        case 'rain':
          setIcon({
            name: "rainy-outline",
            color: '#1ec9ff',
          });
          break;

        case 'cloud':
          setIcon({
            name: "cloud-outline",
            color: '#1ec9ff'
          });
          break;

        default:
          setIcon({
            name: "partly-sunny-outline",
            color: '#FFB300',
          });
      }

      setLoading(false);

    })();

  }, []);

  return (
    <SafeAreaView style={ styles.container }>
      <Menu />
      <Header />
      <Conditions />
      <FlatList
        horizontal={ true }
        showsHorizontalScrollIndicator={ false }
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
    paddingTop: '2%'
  },

  list: {
    marginTop: 10,
    marginRight: 11,
  }
})