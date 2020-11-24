import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShowDocumentTree from '../Screens/ShowDocumentTree';
import Mains from '../Screens/MainS';

const Stack = createStackNavigator();

export default function Navigator(){
  return(
    <Stack.Navigator initialRouteName="MainS">
      <Stack.Screen 
        name='MainS'
        component={Mains}
      />
      <Stack.Screen 
        name='ShowDocumentTree'
        component={ShowDocumentTree}
      />
    </Stack.Navigator>
  );
}
