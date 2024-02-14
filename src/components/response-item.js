import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Avatar } from '@rneui/themed';

const Response_Item = ({ title }) => (
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
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: '2%',
  },
  character: {
    width: '20%',
    alignItems: 'center',
  },
  body: {
    width: '80%',
    paddingVertical: '3%',
  }
})


export default Response_Item;