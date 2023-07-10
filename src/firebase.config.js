import {getApp,getApps,initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyC_-1t7LcgDm96EHr3OwGPzLyJDRDKfcq0",
    authDomain: "fooddelivery-8325d.firebaseapp.com",
    databaseURL: "https://fooddelivery-8325d-default-rtdb.firebaseio.com",
    projectId: "fooddelivery-8325d",
    storageBucket: "fooddelivery-8325d.appspot.com",
    messagingSenderId: "515775783080",
    appId: "1:515775783080:web:c2138d2de41b926b23a29d"
  };
const app=getApps.length>0?getApp():initializeApp(firebaseConfig);

const firestore=getFirestore(app);
const storage=getStorage(app);

export {app,firestore,storage};

  