import React from 'react';
import {View, Text} from 'react-native'

interface UserProps{
  name: string,
  age:number,
  profession?: 'Developer' | 'Tester' | 'Designer',
  children?:React.ReactNode
}



export default function User({name, age, profession, children}:UserProps) {
  return (
    <View>
      
     <View style={{flexDirection:'row', justifyContent:'space-between',paddingVertical:10}}>
     <Text style={{fontSize:25}}>{name}</Text>
     <Text style={{fontSize:25}}>{age}</Text>
     <Text style={{fontSize:25}}>{profession}</Text>
     <View>{children}</View>
     </View>
    </View>
      
  )
}
