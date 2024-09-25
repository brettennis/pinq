import { Slot } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import Header from '@/components/Header';

export default function TabLayout() {

  return (
    <>
      <Header />
      <Slot />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})