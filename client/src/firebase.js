import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp(
  {
    apiKey: "AIzaSyCpsGRp4trdw4iibUfCwuksbWsjCFa6Er0",
    authDomain: "capstone-c9664.firebaseapp.com",
    projectId: "capstone-c9664",
    storageBucket: "capstone-c9664.appspot.com",
    messagingSenderId: "39705362450",
    appId: "1:39705362450:web:fbfbb2e971f8940fc058cb",
    measurementId: "G-R1YPWSJ7XZ"
  }
)

export const auth = app.auth()
export default app