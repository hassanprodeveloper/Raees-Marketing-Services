import React from 'react';
import {StyleSheet,FlatList, Text, View} from 'react-native';
import AnimatedScrollView from './AnimatedScrollView';
//
import {windowWidth, windowHeight} from '../../../Assets/Dimensions';
import Header from '../../Header';
import PresentStockCard from '../../PresentStockCard';
import {StockList} from '../../../redux/List/PresentStockList';

const PresentStock = ({navigation}) => {
  const obj = StockList;
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
                  issue={false}
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
