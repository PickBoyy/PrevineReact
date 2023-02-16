import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from 'react-native';


export const ClearStorage = () => {
AppState.addEventListener('change', async (nextAppState) => {
  if (nextAppState === 'background') {
    await AsyncStorage.clear();
  }
});
}