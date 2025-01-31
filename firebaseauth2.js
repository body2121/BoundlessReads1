// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration (same as the one in sign-up form)
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

// Handle form submission for sign-in
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent traditional form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    localStorage.setItem("userEmail", email);

    // Sign in the user
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Login successful!");
        window.location.href = "online free library 2.html"; // Redirect upon successful login
        console.log('User:', user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });
});
