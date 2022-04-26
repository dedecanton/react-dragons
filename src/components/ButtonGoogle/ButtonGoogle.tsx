/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";

import tw from "twin.macro";
import { AuthContext } from "../../context/auth-context";

const Button = tw.button`
    my-2
    shadow-2xl
    p-4
    rounded-full
    text-4xl
    hover:animate-bounce
`;

const ButtonGoogle = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const { setUserToken } = useContext(AuthContext);

  const signinHandler = () => {
    signInWithGoogle();
  };

  useEffect(() => {
    user?.user.getIdTokenResult().then((result) => {
      setUserToken(result.token);
    });
  }, [user]);

  return (
    <Button onClick={signinHandler}>
      <FcGoogle />
    </Button>
  );
};

export default ButtonGoogle;
