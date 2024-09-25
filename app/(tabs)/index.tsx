import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
  return (
    <>
    <View style={styles.container}>
      <Text style={{color: 'white'}}>body</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
