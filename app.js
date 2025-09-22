// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";

// Your Firebase config (copy-paste from Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyCox3mC...Zm",  // <-- your key here
  authDomain: "roliblox.firebaseapp.com",
  projectId: "roliblox",
  storageBucket: "roliblox.appspot.com",
  messagingSenderId: "264126773724",
  appId: "1:264126773724:web:c5d9d2966df2bc6df7719",
  measurementId: "G-GJKJK8V28T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Example functionality: show fake value
document.getElementById("checkValue").addEventListener("click", () => {
  const user = document.getElementById("username").value;
  document.getElementById("result").innerText =
    `Estimated value for ${user}: 12,345 Robux (demo)`;
});

