
import React from "react";
import { Picker, StyleSheet, View } from "react-native";

class PickerExample extends React.Component{

    state = {user: ''}

    updateUser=(user)=>{
        this.setState({user:user})
    }

    render(){
        return(

            <View>
                <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Steve" value = "steve" />
               <Picker.Item label = "Ellen" value = "ellen" />
               <Picker.Item label = "Maria" value = "maria" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>

            </View>

        )
    }

}

const styles = StyleSheet.create({
    text: {
       fontSize: 30,
       alignSelf: 'center',
       color: 'red'
    }
 })

export default PickerExample