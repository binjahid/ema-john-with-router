import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../components/Firebase/firebase.init";
initializeFirebase();
const useFisebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // observe user state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  //SignOut
  const handleSingOut = () => {
    signOut(auth).then((result) => {
      setUser({});
    });
  };
  return {
    user,
    signInWithGoogle,
    error,
    handleSingOut,
  };
};
export default useFisebase;
