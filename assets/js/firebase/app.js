
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBBc1Fu74D1bPyy92_3JbS4N83wDjpIvJM",
    authDomain: "semana-mundo-invertido-e2a6d.firebaseapp.com",
    projectId: "semana-mundo-invertido-e2a6d",
    storageBucket: "semana-mundo-invertido-e2a6d.appspot.com",
    messagingSenderId: "975488498450",
    appId: "1:975488498450:web:cfb8cb74bc6d2cd99151cb"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  export default app