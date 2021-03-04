import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {windowHeight, windowWidth} from '../Assets/Dimensions';

const RadioButtons = ({title, label1, label2, checked, setchecked, disable}) => {
  return (
    <View style={styles.RadioButtonCont} >
      {/* <Text style={styles.radioTitle}>{title} :</Text> */}

      <TouchableOpacity
      disabled={disable}
        style={styles.container}
        onPress={() => {
          setchecked(label1);
        }}>
        <Text style={styles.text}>{label1}</Text>
        <RadioButton
        disabled={disable}
          value={label1}
          status={checked === label1 ? 'checked' : 'unchecked'}
          onPress={() => {
            setchecked(label1);
          }}
          color="#2e64e5"
        />
      </TouchableOpacity>

      <TouchableOpacity
      disabled={disable}
        style={styles.container}
        onPress={() => {
          setchecked(label2);
        }}>
        <Text style={styles.text}>{label2}</Text>
        <RadioButton
        disabled={disable}
          value={label2}
          status={checked === label2 ? 'checked' : 'unchecked'}
          onPress={() => {
            setchecked(label2);
          }}
          color="#2e64e5"
        />
      </TouchableOpacity>
    </View>
  );
};

export default RadioButtons;

const styles = StyleSheet.create({
  RadioButtonCont: {
    // marginTop: 5,
    // marginBottom: 10,
    // width: '100%',
    // height: windowHeight / 15,
    // borderColor: '#ccc',
    // borderRadius: 3,
    // borderWidth: 1,
    // backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  radioTitle: {
    fontSize: 17,
    textTransform: 'capitalize',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 17,
    textTransform: 'capitalize',
  },
});
