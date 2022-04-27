import React, { useState } from "react";
import { FormsContext } from "../contexts/forms-context";
import AuthView from "../views/AuthView";


const AuthController = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");
  const delayToSwitchForm = 400;
  const animationDuration = 1000;

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, animationDuration);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, delayToSwitchForm);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, delayToSwitchForm);
  };

  const contextValue = { switchToSignin, switchToSignup };

  return (
    <FormsContext.Provider value={contextValue}>
        <AuthView isExpanded={isExpanded} active={active} />
    </FormsContext.Provider>
  );
};

export default AuthController;
