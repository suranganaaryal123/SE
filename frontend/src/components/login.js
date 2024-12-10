// login.js
import React, { useState } from "react";
import { auth, provider, signInWithPopup } from '../firebase/firebase';

const GoogleLogin = () => {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      // Sign in with a popup
      const result = await signInWithPopup(auth, provider);

      // Get user information
      const user = result.user;
      const token = await user.getIdToken(); // Firebase ID token

      // Save user info and token
      setUser({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        token: token,
      });

      console.log("Logged in user:", user);
      console.log("Firebase Token:", token);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      {!user ? (
        <button onClick={handleGoogleLogin}>Sign in with Google</button>
      ) : (
        <div>
          <p>Welcome, {user.name}!</p>
          <img src={user.photo} alt={user.name} width={50} />
        </div>
      )}
    </div>
  );
};

export default GoogleLogin;
