import {  Navigate } from 'react-router-dom'; 
 
  const PublicRoutes = ({
    isAuthenticated,
    redirectPath='/admin/dashboard',
    children,
  }) => { 
    if (isAuthenticated) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };
  
  export default PublicRoutes;