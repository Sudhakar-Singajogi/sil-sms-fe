import { Navigate } from 'react-router-dom'; 

  const PrivateRoutes = ({
    isAuthenticated,
    redirectPath='/', 
    children
  }) => { 
    if (!isAuthenticated) {
      return <Navigate to={redirectPath} replace />;
    } 
  
    return children;
  };
  
  export default PrivateRoutes;