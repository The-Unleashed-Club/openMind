import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  Text,
  View,
} from "react-native";
import { Avatar } from '@rneui/themed';
import Button_1 from "../components/button1";
import colors from "../components/colors";



const Response_Item = ({title}) => (
  <View style={styles.container} >
    <View style={styles.character} >
      <Avatar
          size={51}
          rounded
          source={require('../../assets/choice.jpg')}
        />
    </View>
      <View style={styles.body} >
        <Text >{title}</Text>
      </View>
  </View>
);

const styles = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: '2%',
    // backgroundColor: colors.test2
  },
  character:{
    width: '20%',
    alignItems: 'center',
    // backgroundColor: colors.test4
  },
  body:{
    width: '80%',
    paddingVertical: '3%',
    // backgroundColor: colors.test3
  }
})


export default Response_Item;