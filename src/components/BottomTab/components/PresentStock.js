import React from 'react';
import {StyleSheet,FlatList, Text, View} from 'react-native';
import AnimatedScrollView from './AnimatedScrollView';
//
import {windowWidth, windowHeight} from '../../../Assets/Dimensions';
import Header from '../../Header';
import PresentStockCard from '../../PresentStockCard';
import {StockList} from '../../../redux/List/PresentStockList';
import {MMKV} from 'react-native-mmkv';

const PresentStock = ({navigation}) => {
  const obj = StockList;
  console.log('present stock #13 local storage value',MMKV.getBoolean('isLogin'))
  return (
    <>
      <View style={styles.homeContainer}>
        {/* top section down here */}
        <Header
          title="present stock"
          iconType="ios-menu-sharp"
          onPress={() => navigation.openDrawer()}
        />

        <View style={styles.bottomContainer}>
          <AnimatedScrollView style={styles.container}>
            <FlatList
              data={Object.keys(obj)}
              renderItem={({item}) => (
                <PresentStockCard
                  name={obj[item].name}
                  box={obj[item].box}
                  issue={3}
                  id={obj[item].skuCode}
                />
              )}
            />

          </AnimatedScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#76a6ef',
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#c9302c',
    // width: 2*windowWidth,
  },
  bottomContainer: {
    flex: 11,
    width: '100%',
    // backgroundColor: '#f5f5f5',
    borderTopRightRadius: 10,
    // paddingTop: 10,
    paddingBottom: 5,
    borderTopLeftRadius: 10,
  },
});

export default PresentStock;
