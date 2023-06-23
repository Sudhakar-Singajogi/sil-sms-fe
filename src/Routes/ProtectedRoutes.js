import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import routes from "./routes"; 

const ProtectedRoutes = (props) => {
  if (!props.isAuthenticated) {
    // If the user is not authenticated, you can redirect them to the login page or render an appropriate component
    return <Navigate to="/" replace />;
  }

  return (
    <Suspense fallback="">
      <Routes>
        {routes.protected_routes.map(({ path, component, permalink }) => (
          <Route path={path} key={permalink} element={component} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default ProtectedRoutes;
