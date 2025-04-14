// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// ↓ここに自分のFirebaseプロジェクトの設定を貼る！
const firebaseConfig = {
    apiKey: "AIzaSyCSbKFmVla8aaOHpTBKHWwPl4PS0e3C-Qg",
    authDomain: "home-manager-f04f5.firebaseapp.com",
    projectId: "home-manager-f04f5",
    storageBucket: "home-manager-f04f5.firebasestorage.app",
    messagingSenderId: "927745977794",
    appId: "1:927745977794:web:5cff41a20b796b28e1ba5b",
    measurementId: "G-M3LTP7E48V"  
};

// Firebaseアプリを初期化
const app = initializeApp(firebaseConfig);

// Firestoreインスタンスを取得
const db = getFirestore(app);


export { db };
