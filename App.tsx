import { StyleSheet, Text, View } from 'react-native';
import {Home} from './src/screens/Home';

export default function App() {
  return (
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4b3b3',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottom:{
    flex: 1,
    backgroundColor: '#a85d5d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontStyle: 'italic',
    fontWeight: '600',
    fontSize: 70,
    color: "#ffffff"
  }
});
