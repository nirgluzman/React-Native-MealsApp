import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <>
      <CategoriesScreen />
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({});
