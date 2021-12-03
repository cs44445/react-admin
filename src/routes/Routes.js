import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routeList";
import NotFound from "../views/notfount/NotFound";
import storage from "../localStorage";

function createRoutes(route) {
  if (route.children) {
    return (
      <Route
        key={route.meta.key}
        path={route.path}
        element={route.meta.needLogin ? <RequireAuth><route.component /></RequireAuth> : <route.component />}
      >
        {route.children.map(sub => createRoutes(sub))}
      </Route >
    )
  } else {
    return (
      <Route
        key={route.meta.key}
        path={route.path}
        element={route.meta.needLogin ? <RequireAuth><route.component /></RequireAuth> : <route.component />}
      />
    )
  }
}

function RequireAuth(props) {
  if (!storage.get('token')) {
    return <Navigate to="login" />;
  }
  return props.children;
}

const RouterComp = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(item => createRoutes(item))}
        <Route key='404' path='/*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComp;
