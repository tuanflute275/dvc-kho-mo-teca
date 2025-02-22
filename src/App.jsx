import { Route, Routes, Navigate } from "react-router-dom";
import { appRoutes } from "./routes/Routes";
import { useSelector } from "react-redux";
import { selectUserData } from "./redux/reducers/user";
import { LanguageProvider } from "./context/LanguageContext";
import Page403 from "./containers/pages/result/Page403";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const userData = useSelector(selectUserData);
  const isAuthenticated = userData?.user?.id;
  return (
    <LanguageProvider>
      <Routes>
        {appRoutes.map((route, index) => {
          // check authenticate
          const element = route.protected ? (
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              {route.element}
            </ProtectedRoute>
          ) : (
            route.element
          );

          // check authorization
          if (route.path.includes( window.location.pathname.toString)) {
            let isPermission = false;
            let listPermissions = JSON.parse(
              localStorage.getItem("permissions")
            );
            let currentPermissions = route.can;

            for (let i = 0; i < currentPermissions.length; i++) {
              const currentP = currentPermissions[i];
              console.log(currentP);

              for (let j = 0; j < listPermissions.length; j++) {
                const listP = listPermissions[j];
                if (currentP == listP) {
                  isPermission = true;
                }
              }
            }

            if (!isPermission) {
              return (
                <Route exact key={-1} path={"/403"} element={<Page403 />} />
              );
            }

            console.log("check issPPPPP", isPermission);
          }
          return (
            <Route exact key={index} path={route.path} element={element} />
          );
        })}
      </Routes>
    </LanguageProvider>
  );
}

export default App;
