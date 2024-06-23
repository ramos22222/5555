import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity  } from 'react-native';
import { Button, CheckBox, Header, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../src/Conf";

export default function Cadastro() {
    const navigation = useNavigation()

    const [Email, setEmail] = useState(null)
    const [nome, setNome] = useState(null)
    const [CPF, setCPF] = useState(null)
    
    const [isSelected, setSelected] = useState(false)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorNome, setErrorNome] = useState(null)
    const [errorCPF, setErrorCPF] = useState(null)
   
    const [senha, setsenha] = useState(null)
    const [errorsenha, setErrorsenha] = useState(null)
    
    let CPFField = null

    const validar = () => {
        let error = false
        setErrorEmail(null)
        setErrorCPF(null)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!re.test(String(Email).toLowerCase())) {
            setErrorEmail("*Preencha seu email corretamenteee")
            error = true
      
        }
        if (!CPFField.isValid()){
            setErrorCPF("*Preencha seu CPF corretamente")
            error = true
            }
            if (nome == null){
                setErrorNome("*Preencha seu Nome ")
                error = true
                }
                if (senha == null){
                    setErrorsenha("*Preencha sua senha ")
                    error = true
                    }
                
            
            return !error
    }
    const salvar = () => {
        if(validar()){
        createUserWithEmailAndPassword(auth, Email, senha)
        .then((userCredential) => {
          const user = userCredential.user;
          alert('O usuário foi criado. Faça login');
          console.log("Cadastro realizado com sucesso!");
          navigation.navigate('Login');
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
            
        }
    }
    

    return ( 
        <View style={styles.container}>
            

           
            <Text style = {{margin:20 }} h2>Cadastre-se</Text>
            <Input
                placeholder="Email:"
                onChangeText={value => {
                    setEmail(value)
                setErrorEmail (null)}
                }
                keyboardType='email-address'
                errorMessage={errorEmail}
            />
             <Input
                placeholder="Senha:"
                onChangeText={value => {
                    setsenha(value)
                    setErrorsenha (null)}
                }
                errorMessage={errorsenha}
            />
            <Input
                placeholder="Nome:"
                onChangeText={value => {
                    setNome(value)
                    setErrorNome (null)}
                }
                errorMessage={errorNome}
            />
           
            <View style={styles.containerMask}>
            <TextInputMask
            style={styles.maskedInput}
            placeholder="CPF:"
            placeholderTextColor={"#999"}
            type={'cpf'}
            value={CPF}
            onChangeText={value => {
                setCPF(value),
                setErrorCPF (null)}
            }
                keyboardType='number-pad'
                returnKeyType='done'
                

                
                ref={(ref) => CPFField = ref}
            />
           
            </View>
            <Text style={styles.errorMessage}>{errorCPF}</Text>
            <View style={styles.containerMask}>
            
           
            </View>


            
            <TouchableOpacity resizeMode="contain" style={styles.btnForm} onPress={() => salvar()}>
            <Text style={{ fontSize: 18, textAlign: 'center', top: '5%',color:"#ffffffff", fontWeight: '10000', }}> Salvar </Text>
           
         
        </TouchableOpacity>
           


           

        </View>

       
        
    );
}


