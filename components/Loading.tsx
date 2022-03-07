import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Cargando datos, por favor espere...</Text>
        <ActivityIndicator size="large" color="#841584" />
      </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        fontSize: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    loadingText : { 
      marginBottom: 50 
    },
})