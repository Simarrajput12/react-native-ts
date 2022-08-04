import React from 'react';
import {View, Text, SafeAreaView} from 'react-native'
import User from '../components/User'

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
  <View style={{paddingHorizontal:10,paddingVertical:20}}>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
     <Text style={{fontSize:30, color:'green'}}>{'Name'}</Text>
     <Text style={{fontSize:30, color:'red'}}>{'Age'}</Text>
     <Text style={{fontSize:30, color:'red'}}>{'Profession'}</Text>
     </View>
  <User name='Simar' age={28} profession='Developer'/>
  <User name='Rajput' age={23} profession='Tester'/>
  <User name='Laddi' age={23} profession='Designer'>
    <Text style={{fontSize:25}}>Salary 15 CTC</Text>
    </User>
  </View>
      </SafeAreaView>
   
  )
}
