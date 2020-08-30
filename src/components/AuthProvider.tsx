import React, { useEffect, useState } from "react";
import { firebase } from "firebaseSetup/config";
import { AuthContext } from "context/AuthContext";

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<null | firebase.User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setCurrentUser(null);
      } else {
        setCurrentUser(user);
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <>Loading ...</>;

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
