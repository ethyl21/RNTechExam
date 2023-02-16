import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const App = () => {
  const [input, setInput] = useState('');

  const wordCounter = () => {
      let stringArr = [];              
      let tmpStr = '';               
      for(var i = 0; i< input.length;i++){ 
          if(input[i] !== ' '){            
            tmpStr += input[i];        
           } else if(tmpStr.trim()){          
            stringArr.push(tmpStr);
            tmpStr = "";             
          }
      }
      if(tmpStr){
         stringArr.push(tmpStr);    
      }
      return stringArr.length;               
   }

  return (
    <View>
      <TextInput
        onChangeText={setInput}
        value={input}
        style={{
          marginLeft: 50,
          width: '80%',
          height: '30%',
          borderColor: 'black',
          borderWidth: 1,
          marginTop: 30,
        }}
      />
      <Text style={{marginLeft: 50, marginTop: 20}}>{`Word Count: ${wordCounter()}`}</Text>
    </View>
  )
}

export default App;
