import auth from '@react-native-firebase/auth';
import React, { useState } from "react";
import { Button, Text, useTheme } from "react-native-paper";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useHandleInfo} from "../hooks/useHandleInfo";
import LogoIcon from "../assets/images/logo.svg";

import Input from "../components/Input";
import ButtonDefault from "../components/ButtonDefault";
import Message from "../components/Message";
import {  useNavigation } from "@react-navigation/native";

export default Login = () => {
  const navigation = useNavigation()
  const { colors } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [validEmail,setValidEmail] = useState(false);
  const [validPass,setValidPass] = useState(false);
  const [messageEmail,setMessageEmail] = useState({});
  const [messagePass,setMessagePass] = useState("Senha Inválida");
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
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Logado com sucesso!")
      setLoading(false)
    })
    .catch(error => {
      if(error.code === "auth/invalid-email"){
        setMessageEmail({messageEmail:"Este não é um email Válido!"})
        setColorInputEmail(colors.danger)
        setValidEmail(true)
        setLoading(false)
      }
      if(error.code === "auth/user-not-found"){
        setMessageEmail({messageEmail:"Não encontramos o seu email, realize o cadastro!"})
        setColorInputEmail(colors.danger)
        setValidEmail(true)
        setLoading(false)
      }
      if(error.code === "auth/wrong-password"){
        setMessagePass({
          passNumber:"Senha Inválida!",
          icons:{
            passNumberIcon:"exclamation-thick" 
          }})
        setColorInputPass(colors.danger)
        setValidPass(true)
        setLoading(false)
        setPassword("")
      }
      console.log(error.message)
    });
  };
  const onChangeEmail = (text) => {
    setEmail(text);
    if(text.length > 1){
      setColorInputEmail(colors.primary);
    }
    
  };
  const onChangePassword = (text) => {
    if(text.length > 1){
      setColorInputPass(colors.primary);
    }
    
    setPassword(text);
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
        colorInput={colorInputPass}
      />
      {validPass
      ? <Message
          message={messagePass}
          component="password"
        />
      : <Text></Text>
      }
      <ButtonDefault login={login} loading={loading} text="Login"/>
      <View style={{flexDirection:'row',marginTop:20}}>
        <Button onPress={() => navigation.reset({routes: [{name:'Register'}]})}>Realizar Cadastro</Button>
        <Button  color={colors.accent}>Esqueci a senha</Button>
      </View>
    </SafeAreaView>
  );
};
