import { createContext, useEffect, useState } from "react";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

  // -------------------------------------------------------
  //               Auth Provider Here
  // -------------------------------------------------------

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // -------------------------------------------------------
  //               Authentication Methods
  // -------------------------------------------------------

  //   ------------- Social Logins ---------------
  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const gitHubSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  //   ------------- Email Password ---------------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   ------------- Log Out -----------------
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // -------------------------------------------------------
  //                       Auth Change
  // -------------------------------------------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  //   ---------- Auth Info -----------

  const authInfo = {
    user,
    loading,
    googleSignin,
    gitHubSignin,
    createUser,
    signInUser,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
