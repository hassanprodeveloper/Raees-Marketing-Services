import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TextInput,
} from 'react-native';
// import {connect} from 'react-redux';
import ListCard from './ListCard';

// importing functions from action file

// importing components

const MyFlatList = ({renderData}) => {
//   const obj = renderData;
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={renderData}
          renderItem={({item}) => (
            <ListCard 
              id={item.id}
              name={item.name}
            />
          )}
        />
      </View>
    </>
  );
};

// redux functions
// const mapStateToProps = (state) => ({
//   donorData: state.donorDetails.DonorsList,
// });
//   const mapDispatchToProps = (dispatch) =>({
//   addUser: (data) => dispatch(updateUser1(data))
//   });

// STYLE_SHEET
const styles = StyleSheet.create({
  appCont: {
    flex: 2,
    padding: 13,
  },
});

// export default connect(mapStateToProps, null)(MyFlatList);
export default MyFlatList
