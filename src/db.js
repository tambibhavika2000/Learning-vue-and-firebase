import firebase from "firebase/app";
import "firebase/database";

const config = {
	apiKey: "AIzaSyCT5lWMrm0GTYW7PrIsjaPZ_nDpdyDp2Xg",
	authDomain: "firechat-vue-6fc46.firebaseapp.com",
	projectId: "firechat-vue-6fc46",
	storageBucket: "firechat-vue-6fc46.appspot.com",
	messagingSenderId: "952715143791",
	appId: "1:952715143791:web:c086f3fba5a648d2a5fb9a"
}

const db = firebase.initializeApp(config);
export default db;