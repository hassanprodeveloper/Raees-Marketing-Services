// import React, {useEffect, useState} from 'react';
// import {db} from '../Config/firestore';

// const getFirestoreData = () => {
//   db.collection('admin')
//     .doc('users')
//     .get()
//     .then((snapshots) => {
//       const adminFirestoreData = snapshots._data;
//       setadminUsers(adminFirestoreData);
//     })
//     .catch((error) => console.alert(error));
// };
//
const companiesHandler = (adminUsers, navigation) => {
  const listData = adminUsers.companies;
  console.log('setlistData-->>', listData);
  navigation.navigate('ListScreen', {listData, ScreeTitle: 'Companies'});
};

//
const studentsHandler = (adminUsers, navigation) => {
  const listData = adminUsers.students;
  console.log('setlistData-->>', listData);
  navigation.navigate('ListScreen', {listData, ScreeTitle: 'Students'});
};
//
const jobsHandler = (adminUsers, navigation) => {
  const listData = adminUsers.jobs;
  console.log('setlistData-->>', listData);
  navigation.navigate('ListScreen', {listData, ScreeTitle: 'jobs'});
};
//
const createdjobs = (userData, navigation) => {
  const listData = userData.jobs;
  console.log('setlistData-->>', listData);
  navigation.navigate('ListScreen', {listData, ScreeTitle: 'created jobs'});
};

export {
  // getFirestoreData,
  companiesHandler,
  studentsHandler,
  jobsHandler,
  createdjobs,
};
