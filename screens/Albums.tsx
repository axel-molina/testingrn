import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AlbumList from '../components/AlbumList';

//Components
import Loading from '../components/Loading';
import PersonalData from '../components/PersonalData';

const Albums = () => {
    //Estado indicador de carga
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000)

  return (
    <View style={styles.container}>
      { isLoading ? 
      <Loading></Loading> : 
      <View>
          <PersonalData></PersonalData>
          <AlbumList></AlbumList>
      </View> 
      }
    </View>
  )
}

export default Albums

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
})