// button : this props take a button component to open action sheet
// actionComponent : this props take a whole component to show in action sheet
// actionSheetHeading: this take a string value to show as action sheet title heading
// showEntentionIcon : this takes a boolen value to set condition to show entend icon or not
// extendScreen : this takes a callBack with a navigating path to that screen
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';
import ActionSheet from 'react-native-actions-sheet';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
// import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

const MyActionSheet = ({
  myactionSheetRef,
  button,
  actionComponent,
  actionSheetHeading,
}) => {
  myactionSheetRef = createRef();

  // let actionSheet;
  return (
    <View style={styles.appContainer}>
      <TouchableOpacity
        onPress={() => {
          myactionSheetRef.current?.setModalVisible();
        }}>
        {button}
      </TouchableOpacity>
      {/* <KeyboardAvoidingScrollView> */}
        <ActionSheet ref={myactionSheetRef}>
          <ScrollView>
            <View style={styles.actionSheetTitleCont}>
              <Text style={styles.actionSheetTitleText}>
                {actionSheetHeading}
              </Text>
              {/* {
              showExtendIcon ? 
            <Icon onPress={extendScreen} style={{marginHorizontal: 5, paddingHorizontal: 5,}} name='ios-expand-sharp' color='#c9302c' size={20}/>
            :
            null
            } */}
            </View>
            {actionComponent}
          </ScrollView>
        </ActionSheet>
      {/* </KeyboardAvoidingScrollView> */}
    </View>
  );
};
// redux
const mapStateToProps = (state) => ({
  userCampaigns: state.userData.usercampaign,
});
//   const mapDispatchToProps = (dispatch) =>({
//   addUser: (data) => dispatch(updateUser1(data))
//   });
export default connect(mapStateToProps, null)(MyActionSheet);
// styling
const styles = StyleSheet.create({
  actionSheetTitleCont: {
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  actionSheetTitleText: {
    color: '#0f0f0f',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 3,
    padding: 2,
  },
});
