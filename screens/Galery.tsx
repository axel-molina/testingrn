import React, { useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native'

//Custom hook
import useRequest from "../hooks/useRequest";

const Galery = ({ route, navigation}: any) => {

        // Custom Hook para llamar a la api
        const { isLoading, data, doRequest } = useRequest(
          "https://jsonplaceholder.typicode.com/photos"
        );

        useEffect(() => {
          doRequest();
      }, []) 

  const { userId, albumId } = route.params;

  console.log(userId);

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
                        {item.albumId === userId ? 
                        <View style={styles.imageContain}> 
                            <Text style={styles.photoTitle}>{item.title}</Text>
                            <Image style={styles.image} source={{ uri: item.url }} />
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

export default Galery

const styles = StyleSheet.create({
  contain: {
    marginTop: 20,
},
photoTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
},
image: {
    width: '90%',
    height: 150,
},
imageContain: {
  justifyContent: 'center',
        alignItems: 'center',
}

})