import {db} from '../Config/firestore';
import {MMKV} from 'react-native-mmkv';

export const getFirestoreSdrData = async () => {
  if (true) {
    await db
      .collection('rms')
      .doc('luSdr')
      .get()
      .then((snapshots) => {
        const sdrFirestoreData = snapshots._data;
        MMKV.set('SkuStockList', JSON.stringify(sdrFirestoreData));
        console.log('sdr firestore data ===>>>', sdrFirestoreData);
      })
      .catch((error) => {
        alert('Something Went Wrong catch', error);
        console.assert('user firestore error', error);
        //   setPassword('');
        //   setid('');
        //   setdisable(false);
      });
  } else {
    alert('Fill all required fields...');
  }
};
