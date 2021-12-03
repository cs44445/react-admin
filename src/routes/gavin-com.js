// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { routes } from "./routes";
// import Page404 from "../pages/errors/Page404";


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
        {
          route.children.map(sub => {
            return createRoutes(sub);
          })
        }
      </Route>
    )
  } else {
    // return (
    //   <Route
    //     key={route.meta.key}
    //     path={route.path}
    //     element={route.meta.needLogin ? <RequireAuth><route.component /></RequireAuth> : <route.component />}
    //   />
    // )
    return <ShowRoute />
  }
}

function ShowRoute(route) {
  return (
    <Route
      key={route.meta.key}
      path={route.path}
      element={route.meta.needLogin ? <RequireAuth><route.component /></RequireAuth> : <route.component />}
    />
  )
}

function RequireAuth(props) {
  // let token = window.localStorage.getItem('token');
  let token = storage.get('token')

  if (!token || token.length === 0) {
    return <Navigate to="login" />;
  }

  return props.children;
}

const GRouter = () => {
  let mRoutes = routes.map((item) =>
    createRoutes(item)
  );
  return (
    <BrowserRouter>
      <Routes>
        {/* {mRoutes} */}
        {routes.map(item => createRoutes(item))}
        <Route key='page404' path='/*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default GRouter;
