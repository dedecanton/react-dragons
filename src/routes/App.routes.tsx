/* eslint-disable  @typescript-eslint/no-explicit-any */
import { Navigate, Route, Routes } from "react-router";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";


import AuthController from "../controllers/AuthController";
import DragonListController from "../controllers/DragonListController";
import DragonEditController from "../controllers/DragonEditController";
import DragonAddView from "../views/DragonAddView";
import DragonDetailController from "../controllers/DragonDetailController";
import NotFoundController from "../controllers/NotFoundController";
import NotAuthorizedController from "../controllers/NotAuthorizedController";

export const UnauthenticatedRoutes = (): any => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<AuthController />} />
        <Route path="/dragons" element={<Navigate to="/not-authorized" />} />
        <Route path="/dragon/*" element={<Navigate to="/not-authorized" />} />
        <Route path="/not-found" element={<NotFoundController />} />
        <Route path="/not-authorized" element={<NotAuthorizedController />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  );
};

export const AuthenticatedRoutes = (): any => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dragons" />} />
        <Route path="/auth" element={<Navigate to="/dragons" />} />
        <Route path="/dragons" element={<DragonListController />} />
        <Route path="/dragon/:id" element={<DragonDetailController />} />
        <Route path="/dragon/edit/:id" element={<DragonEditController />} />
        <Route path="/dragon/add" element={<DragonAddView />} />
        <Route path="/not-found" element={<NotFoundController />} />
        <Route path="/not-authorized" element={<NotAuthorizedController />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  );
};
