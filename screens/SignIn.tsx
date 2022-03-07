import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

//Custom hook
import useRequest from "../hooks/useRequest";

import { useDispatch } from "react-redux";
import { getUserAction } from "../redux/actions/usersActions";


const SignIn = ({ navigation }: any) => {

  const dispatch = useDispatch();

  const addUser = (user:Array<any>) => dispatch(getUserAction(user));


  // Custom Hook para llamar a la api
  const { isLoading, data, doRequest } = useRequest(
    "https://jsonplaceholder.typicode.com/users"
  );

  //Estados del formulario
  const [email, setEmail] = useState("");
  const [user, setUsuario] = useState("");

  const [error, setError] = useState("");

  //Funcion para validar campos
  function isEnableSignIn() {
    return email != "" && user != "";
  }

  //Traigo base de usuarios
  useEffect(() => {
    doRequest();
  } , []);

  //Funcion cuando se inicia sesion, recibe el email y el usuario
  const iniciarSesion = async (email: string, user: string) => {
    setError("");
    if (isEnableSignIn()) {
      
      //Si el id existe, avanzar de pantalla
      if (data.length > 0) {
        //recorrer en busca del usuario
        for (let i = 0; i < data.length; i++) {
          if (user === data[i].username && email === data[i].email) {
            setError("");
            //Guardar datos en redux
            addUser(data[i]);
            navigation.navigate("Albums");
          } else {
            setError("Usuario o email incorrectos");
          }
        }
      } else {
        setError("Usuario o contraseña incorrectos");
      }
    }else {
          setError("Todos los campos son obligatorios");
      }
  };

  return (
    <View style={styles.container}>
      <FontAwesome name="user-circle-o" size={62} color="#841584" />
      <Text style={styles.titulo}>Iniciar Sesión</Text>
      <Text>Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        onChangeText={(text) => setUsuario(text)}
      ></TextInput>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={(text) => setEmail(text)}
      ></TextInput>

      <Text style={styles.error}>{error}</Text>

      {!isLoading ? (
        <Button
          onPress={() => iniciarSesion(email, user)}
          title="INICIAR SESIÓN"
          color="#841584"
        />
      ) : (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    height: 40,
    marginHorizontal: 12,
    paddingHorizontal: 80,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  error: {
    color: "red",
    margin: 10,
  },
});
