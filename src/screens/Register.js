import React, { useState } from "react";
import auth from '@react-native-firebase/auth';
import { Button, Text, useTheme } from "react-native-paper";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useHandleInfo} from "../hooks/useHandleInfo";
import LogoIcon from "../assets/images/logo.svg";

import Input from "../components/Input";
import ButtonDefault from "../components/ButtonDefault";
import Message from "../components/Message";
import {  useNavigation } from "@react-navigation/native";
import {usePass} from "../hooks/usePass";

export default Register = () => {
  const navigation = useNavigation()
  const { colors } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [validEmail,setValidEmail] = useState(false);
  const [validPass,setValidPass] = useState(false);
  const [messageEmail,setMessageEmail] = useState({});
  const [messagePass,setMessagePass] = useState({});
  const [colorInputPass,setColorInputPass] = useState("");
  const [colorInputEmail,setColorInputEmail] = useState("");

  //Functions
  const login = () => {
    if(password == ""){
      setColorInputPass(colors.danger)
      return
    }
    if(email == ""){
      setColorInputEmail(colors.danger)
      return
    }
    setLoading(true);
    setValidEmail(useHandleInfo(email))
    auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    alert("Cadastrado com sucesso!")
    setLoading(false)
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      setMessageEmail({messageEmail:"Este email já está em uso!"})
      setColorInputEmail(colors.danger)
      setValidEmail(true)
      setLoading(false)
    }

    if (error.code === 'auth/invalid-email') {
      setMessageEmail({messageEmail:"Este não é um email Válido!"})
      setColorInputEmail(colors.danger)
      setValidEmail(true)
      setLoading(false)
    }

  });
  };
  const onChangeEmail = (text) => {
    setEmail(text);
    setColorInputEmail(colors.primary)
    
  };
  const onChangePassword = (text) => {
    setPassword(text);
    setColorInputPass(colors.primary)
    let validatePass = usePass(text,true)
    const objMessages = {
      passNumber:"Ao menos um Número",
      passLength:"Entre 6 e 8 caracteres",
      passUper:"Ao menos uma letra maiúscula",
      icons:{
        passNumberIcon:!validatePass.testNumber ? "exclamation-thick" : "check-outline",
        passLengthIcon:!validatePass.testLength ? "exclamation-thick" : "check-outline",
        passUperIcon:!validatePass.testUper ? "exclamation-thick" : "check-outline",
      }
    }
    
    if(objMessages.passNumber != "" && objMessages.passLength != "" && objMessages.passUper != "") {
      setValidPass(true)
      setColorInput(colors.danger)
    }
    setMessagePass(objMessages)
  };
  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <LogoIcon width="40%" height="160px" />
      <Input
        value={email}
        onChangeText={onChangeEmail}
        placeText={"Seu Email"}
        iconName={"email"}
        segurity={false}
        colorInput={colorInputEmail}
      />
      {validEmail
      ? <Message
          message={messageEmail}
          iconEmail="exclamation-thick"
        />
      : <Text></Text>
      }
      
      <Input
        value={password}
        onChangeText={onChangePassword}
        placeText={"Digite sua senha"}
        iconName={"lock"}
        segurity={true}
        pass={true}
        isRegister={true}
        colorInput={colorInputPass}
      />
      {validPass
      ? <Message
          message={messagePass}
          component="password"
        />
      : <Text></Text>
      }
      <ButtonDefault login={login} loading={loading} text="cadastre-se"/>
      <View style={{flexDirection:'row',marginTop:20}}>
        <Button >Já tem cadastro?</Button>
        <Button  onPress={() => navigation.reset({routes: [{name:'Login'}]})} color={colors.accent}>Fazer Login</Button>
      </View>
    </SafeAreaView>
  );
};
