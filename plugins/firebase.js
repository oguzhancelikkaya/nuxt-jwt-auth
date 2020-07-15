import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCrXwKRMfiEal9gTI1KldaIPhortdaQYTA',
  authDomain: 'stock-market-hunter.firebaseapp.com',
  databaseURL: 'https://stock-market-hunter.firebaseio.com',
  projectId: 'stock-market-hunter',
  storageBucket: 'stock-market-hunter.appspot.com',
  messagingSenderId: '637458093180',
  appId: '1:637458093180:web:b4428212a906a47d91e5f9'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
