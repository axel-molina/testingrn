import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//redux
import { useSelector } from "react-redux";

const PersonalData = () => {

    const user = useSelector((state:any) => (state.users.user));
    
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Bienvenido {user.name}</Text>
          <View style={styles.dataContainer}>
              <Text>Datos personales:</Text>
              <Text>Email: {user.email}</Text>
              <Text>Ciudad: {user.address.city}:</Text>
              <Text>Calle: {user.address.street}</Text>
              <Text>Compañía: {user.company.name}</Text>
              <Text>Sitio web: {user.website}</Text>
          </View>
      </View> 
  )
}

export default PersonalData

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#841584",
    },
    dataContainer: {
        marginLeft: 20,
    }, 
})