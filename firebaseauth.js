// Import the Firebase functions you need from the SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1hbWyUAQHzESfVahiul_pxVVrFArY34Q",
  authDomain: "login-146b8.firebaseapp.com",
  projectId: "login-146b8",
  storageBucket: "login-146b8.firebasestorage.app",
  messagingSenderId: "382011556830",
  appId: "1:382011556830:web:d11fb059c3ddecae98d34f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle form submission
const form = document.getElementById('signupForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting in the traditional way

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    localStorage.setItem("userEmail", email);

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Account created successfully!");
        window.location.href = "online free library 2.html"; 
        console.log('User:', user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });
});
