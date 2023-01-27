import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Geolocation from '@react-native-community/geolocation';

Geolocation.setRNConfiguration(config = {
    skipPermissionRequests: true,
    authorizationLevel: 'always' ,
    locationProvider: 'auto'
  });
class GeolocationExample extends Component {
   state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
   }
   watchID = null;
   componentDidMount = () => {
     
      

    Geolocation.getCurrentPosition(
    
                (position) => {
        
                    console.log(position);
        
                },
        
        
                (error) => {
        
                    // See error code charts below.
        
                    console.log(error.code, error.message);
        
                },
        
                {
        
                    enableHighAccuracy: false,
        
                    timeout: 10000,
        
                    maximumAge: 100000
        
                }
        
            );
   }
  
   render() {
      return (
         <View style = {styles.container}>
            <Text style = {styles.boldText}>
               Initial position:
            </Text>
            
            <Text>
               {this.state.initialPosition}
            </Text>
            
            <Text style = {styles.boldText}>
               Current position:
            </Text>
            
            <Text>
               {this.state.lastPosition}
            </Text>
         </View>
      )
   }
}
export default GeolocationExample

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
   boldText: {
      fontSize: 30,
      color: 'red',
   }
})