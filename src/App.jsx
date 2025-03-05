import { Route, Routes, Navigate } from 'react-router-dom';
import { appRoutes } from '~/routes/Routes';
import { useSelector } from 'react-redux';
import { selectUserData } from '~/redux/reducers/user';
import { selectPermissionData } from '~/redux/reducers/permission';
import { LanguageProvider } from '~/context/LanguageContext';
import Page404 from './containers/pages/result/Page404';


const ProtectedRoute = ({ isAuthenticated, children, path, permissions = [] }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (permissions.length > 0) {
    const userPermissions = JSON.parse(localStorage.getItem('permissions') || '[]');
    // const hasPermission = permissions.some((permission) => userPermissions.includes(permission));
    const hasPermission = true;

    if (!hasPermission) {
      return <Navigate to="/403" />;
    }
  }

  return children;
};

function App() {
  const userData = useSelector(selectUserData);
  const userPermissions = useSelector(selectPermissionData).permissions ?? "[]";
  const isAuthenticated = userData?.user?.id;

  console.log(userPermissions);



  const checkPermissions = (route) => {
    if (!route.can) {
      return true;
    }
    // console.log(route.can.some((permission) => userPermissions.includes(permission)))
    // return route.can.some((permission) => userPermissions.includes(permission));
    return true;
  };

  return (
    <LanguageProvider>
      <Routes>
        {appRoutes.map((route, index) => {
          if (!route.protected && route.can && !checkPermissions(route)) {
            return <Route key={index} path={route.path} element={<Navigate to="/403" />} />;
          }

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

          return <Route key={index} path={route.path} element={route.element} />;
        })}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LanguageProvider>
  );
}


export default App;
