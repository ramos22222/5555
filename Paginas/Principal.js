import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import styles from '../style/MainStyle';
import * as React from 'react';
import { ref, onValue, set, update } from 'firebase/database';
import { database } from "../src/Conf";
import { useState } from 'react';
import { useEffect } from 'react';
import MudaLampada from '../src/toggleLamp/togglelamp';


export default function Principal() {

    const [temperature, setTemperature] = useState(null);
    const [umidade, setUmidade] = useState(null);
    const [estado, setEstado] = useState(null);

    const Enviado = (Atuadores) => {
      const reference = ref(database, 'Atuadores');
      update(reference, Atuadores);
  };

    const handleSnapshot = (snapshot, setState) => {
      const data = snapshot.val();
      console.log('Snapshot data:', data); 
      if (data && typeof data === 'object') {
        const values = Object.values(data);
        setState(values[0]);
      } else {
        setState(data);
      }
    };

    useEffect(() => {
      const temperatureRef = ref(database, '/Dados_Sensores/Temperatura/');
      const humidityRef = ref(database, '/Dados_Sensores/Humidade/');
  
      const unsubscribeTemp = onValue(temperatureRef, (snapshot) => {
        console.log('Temperature snapshot received'); 
        handleSnapshot(snapshot, setTemperature);
      });
  
      const unsubscribeHum = onValue(humidityRef, (snapshot) => {
        console.log('Humidity snapshot received');  
        handleSnapshot(snapshot, setUmidade);
      });
  
      return () => {
        unsubscribeTemp();
        unsubscribeHum();
      };
    }, []);
  
    console.log('Temperature:', temperature); 
    console.log('Umidade:', umidade);

    return (
        <View style={styles.container}>

            <View style={{ alignItems: 'center', top: -60, }}>
                <Image style={styles.Logo} source={require('../src/image/planta3.png')} resizeMode="contain" />
            </View>
            

                
            <View style={{backgroundColor:"#447130", borderRadius: 12, height:147, width: 330 }}>
                    <Text h3 style={{ fontSize: 10, textAlign: 'center', textAlignVertical: 'center', color: "#ffffff", fontWeight: 'bold', }}>
                        Temperatura do solo: 
                    </Text>
                    <Text style={{ fontSize: 30, textAlign: 'center', color: "#ffffff", fontWeight: '400', }}>
                        {temperature}
                    </Text>
                    <Text h3 style={{ fontSize: 10, textAlign: 'center', color: "#ffffff", fontWeight: 'bold', }}>
                        Temperatura do ambiente:
                    </Text>
                    <Text  style={{ fontSize: 30, textAlign: 'center', color: "#ffffff", fontWeight: '400', }}>
                        {umidade}
                    </Text>
            </View>
               
                <TouchableOpacity resizeMode="contain" style={styles.btnForme} onPress={() => Enviado({ lampada: false })} >
                    <Text style={{ fontSize: 20, textAlign: 'center', color: "#ffffffff", fontWeight: 'bold', }}>
                        Desligar a lâmpada
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity resizeMode="contain" style={styles.btnForme} onPress={() => Enviado({ lampada: true })}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: "#ffffffff", fontWeight: 'bold', }}>
                        Ligar a lâmpada
                    </Text>
                </TouchableOpacity>
            </View>

    
            )
}
