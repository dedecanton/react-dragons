import React, { useContext } from "react";
import { AuthContext } from "./contexts/auth-context";

import {
  AuthenticatedRoutes,
  UnauthenticatedRoutes,
} from "./routes/App.routes";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    isLoggedIn ? <AuthenticatedRoutes/> : <UnauthenticatedRoutes/>
  );
}

export default App;
