import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

//Custom hook
import useRequest from "../hooks/useRequest";

//redux
import { useSelector } from "react-redux";

const AlbumList = () => {
    const navigation:any = useNavigation();

    const user = useSelector((state:any) => (state.users.user));

      // Custom Hook para llamar a la api
  const { isLoading, data, doRequest } = useRequest(
    "https://jsonplaceholder.typicode.com/albums"
  );

    useEffect(() => {
        doRequest();
    }, []) 

    
  return (
    <View style={styles.contain}>

      { 
      isLoading ? <ActivityIndicator size="large" color="#00ff00" /> : 
      <View>
            <FlatList
                data={data}
                keyExtractor={(item:any) => item.id.toString()}
                renderItem={({ item }) => (
                    <View >
                        {user.id === item.userId ? 
                        <View style={styles.albumsContain}>
                            <Text style={styles.albumsTitle}>{item.title}</Text>
                            <TouchableOpacity style={styles.album} onPress={() => navigation.navigate('Galery', { userId: item.userId, albumId: item.id})}>
                                <Text style={styles.name}>{item.id}</Text>
                            </TouchableOpacity>
                        </View> 
                        : null}
                    </View>
                )}
            /> 
        
      </View>
      }

    </View>
  )
}

export default AlbumList

const styles = StyleSheet.create({
    contain: {
        marginTop: 20,
    },
    album: {
        height: 150,
        width: '90%',
        backgroundColor: "#841584",
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    name: {
        color: 'white',
    },
    albumsContain: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    albumsTitle: {
        fontSize: 18,
        textAlign: 'center',
    },
})