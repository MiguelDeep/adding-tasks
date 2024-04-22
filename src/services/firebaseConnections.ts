/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


 function FireBaseConfig(){

  const firebaseConfig = {
    apiKey: "AIzaSyA1gffOQNEdajo9Ahv21ZF_K7lhBALb5-g",
    authDomain: "taskprojects-580ef.firebaseapp.com",
    databaseURL: "https://taskprojects-580ef-default-rtdb.firebaseio.com",
    projectId: "taskprojects-580ef",
    storageBucket: "taskprojects-580ef.appspot.com",
    messagingSenderId: "701247110604",
    appId: "1:701247110604:web:c4f56df11b4786700e7169",
    measurementId: "G-J7ML9BQ65J"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app)

}



export default FireBaseConfig; */