import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "./Firebase/firebase.config";
import { useState } from "react";

//49-7 (Recap) Implement Simple Firebase Google Auth Integration

function App() {
  const auth = getAuth(app);
  console.log(auth);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        setUser(loggedUser);
      })
      .then((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  console.log(user);

  return (
    <>
      <h1>Firebase + React</h1>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      {user && (
        <div className="card">
          <h2>User:{user.displayName}</h2>
        </div>
      )}
    </>
  );
}

export default App;
