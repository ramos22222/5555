import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button, Header, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth } from "../src/Conf";

export default function Login() {
    const navigation = useNavigation()

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const[userMail, setUserMail] = useState(null)
    const[userPass, setUserPass] = useState(null)

    const entrarnoprincipal = () => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, userMail, userPass)

        .then((userCredential) => {
            console.log(user);

            const user = userCredential.user;

            alert("Login efetuado com sucesso");

            entrar();
        })

        .catch((error) => {
            const errorCode = error.code;

            const errorMessage = error.message;

            console.log(errorMessage);
        });
    }

    const Cadastrar = () => {
        
        navigation.navigate('Cadastro')

    }
    function entrar(){
        console.log("entrouu");
        navigation.navigate('Principal');
    }

    return (

        <View style={styles.container}>
            <View style={{ alignItems: 'center', top: -160, }}>
                <Image style={styles.Logo} source={require('../src/image/planta3.png')} resizeMode="contain" />
            </View>
             
             <Text style={{marginTop: -150, fontWeight: 'bold'}} h4>ECO GARDEN</Text>

            <Text style={{}}  h4>Faça login </Text>
            <Input
                placeholder="Email:"
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                onChangeText={value => {setEmail(value), setUserMail(value)}}
                keyboardType='email-address'
            />
            <Input
                placeholder="Senha:"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={value => {setPassword(value), setUserPass(value)}}
                secureTextEntry={true}
            />
                       
        <TouchableOpacity resizeMode="contain" style={styles.btnForm} onPress={entrarnoprincipal}>
            <Text style={{ fontSize: 18, textAlign: 'center', color:"#fff", fontWeight: '600', }}> Entrar </Text>
        </TouchableOpacity>
           
        <TouchableOpacity resizeMode="contain" style={styles.btnForm} onPress={() => Cadastrar()}>
            <Text style={{ fontSize: 18, textAlign: 'center', color:"#ffffffff", fontWeight: '600', }}> Cadastre-se </Text>          
        </TouchableOpacity>
 
        </View>
    );
}

