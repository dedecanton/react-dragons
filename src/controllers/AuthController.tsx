import React, { useState } from "react";
import { FormsContext } from "../contexts/forms-context";
import AuthView from "../views/AuthView";


const AuthController = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, 1000);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignin, switchToSignup };

  return (
    <FormsContext.Provider value={contextValue}>
        <AuthView isExpanded={isExpanded} active={active} />
    </FormsContext.Provider>
  );
};

export default AuthController;
