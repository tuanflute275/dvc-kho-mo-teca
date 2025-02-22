import { Route, Routes, Navigate } from "react-router-dom";
import { appRoutes } from "./routes/Routes";
import { useSelector } from "react-redux";
import { selectUserData } from "./redux/reducers/user";
import { LanguageProvider } from "./context/LanguageContext";

const ProtectedRoute = ({ isAuthenticated, children, path, permissions = [] }) => {
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If path requires permissions, check them
  if (permissions.length > 0) {
    const userPermissions = JSON.parse(localStorage.getItem("permissions") || "[]");
    const hasPermission = permissions.some(permission => userPermissions.includes(permission));
    
    if (!hasPermission) {
      return <Navigate to="/403" />;
    }
  }

  return children;
};

function App() {
  const userData = useSelector(selectUserData);
  const isAuthenticated = userData?.user?.id;

  const checkPermissions = (route) => {
    if (!route.can) {
      return true;
    }
    
    const userPermissions = JSON.parse(localStorage.getItem("permissions") || "[]");
    return route.can.some(permission => userPermissions.includes(permission));
  };

  return (
    <LanguageProvider>
      <Routes>
        {appRoutes.map((route, index) => {
          // Handle non-protected routes that still need permission checks
          if (!route.protected && route.can && !checkPermissions(route)) {
            return <Route key={index} path={route.path} element={<Navigate to="/403" />} />;
          }

          // Handle protected routes
          if (route.protected) {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated} permissions={route.can}>
                    {route.element}
                  </ProtectedRoute>
                }
              />
            );
          }

          // Return the route element for all other cases
          return <Route key={index} path={route.path} element={route.element} />;
        })}
      </Routes>
    </LanguageProvider>
  );
}


export default App;
