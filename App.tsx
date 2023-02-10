import React from 'react'
import Routes from './src/routes';
import { AppWrapper } from './src/hooks/context';


export default function App() {
  return (
  <AppWrapper>
    <Routes/>
  </AppWrapper>
  )
}

