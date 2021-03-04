import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';


const WelcomeHeading = ({text1, text2}) => {
  return (
    <SafeAreaView>
        <View style={styles.titleCont}>
            <Text style={styles.title}>{text1}<Text style={styles.titleText}>{ text2}</Text> </Text>
        </View>
    </SafeAreaView>
    );
};

  // STYLE_SHEET
  const styles = StyleSheet.create({

  titleCont:{
    padding:10,
    margin:10,
  },
  title:{
    fontSize:25,
    fontWeight:"bold",
  },
  titleText:{
    color: "#ff0000"
  },

});

export default WelcomeHeading;
