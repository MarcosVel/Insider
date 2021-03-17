import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Menu() {
  return (
    <TouchableOpacity>
      <Feather 
        name="menu"
        size={36}
        color="#373737"
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

})