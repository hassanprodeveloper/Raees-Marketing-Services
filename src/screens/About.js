/* eslint-disable prettier/prettier */
import React from 'react'
import {
  StyleSheet, 
  View, 
  Text, 
  Button} from 'react-native';
  
const About = ({navigation}) => {
  return (
    <View style={styles.appContainer}>
      <View>
        <Text>About Screen</Text>
        <Text>Redux and Navigation functionality are at the Welcome Screen</Text>
        <Button style={styles.button} onPress={() => navigation.navigate('DrawerWelcome')} title='Go to Welcome' />
        <Button style={styles.button} onPress={() => navigation.navigate('DrawerHome')} title='Go to Home' />

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:15,
  },
  button: {
    margin:10
  },
});
export default About;
