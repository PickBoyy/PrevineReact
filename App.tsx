import React from 'react'
import { AppWrapper } from './src/hooks/context';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import { ClearStorage } from './src/services/AsyncStorage';


export default function App() {
  ClearStorage()
  return (
  <AppWrapper>
    <Routes/>
  </AppWrapper>
  )
}

