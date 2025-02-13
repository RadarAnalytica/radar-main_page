import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './service/AuthContext';
// import { ProductProvider } from './service/ProductContext';
// import { NavigationProvider } from './service/NavigationContext';
// import { publicRoutes, protectedRoutes, adminRoutes, subscriptionRoutes, errorRoutes } from './service/routeConfig';
// import MobileMenu from './components/MobileMenu';
// import MessageWindow from './components/MessageWindow';
// import { guardComponents } from './service/guards';
// import LoaderPage from "./pages/LoaderPage";
import MainPage from "./pages/MainPage";
function App() {
  // const renderRoutes = (routes) => {
  //   return routes.map(({ path, component: Component, guards = [] }) => {
  //     const wrappedComponent = guards.reduce((wrapped, guard) => {
  //       const Guard = guardComponents[guard];
  //       return <Guard>{wrapped}</Guard>;
  //     }, <Component />);

  //     return (
  //       <Route
  //         key={path}
  //         path={path}
  //         element={
  //           <React.Suspense fallback={<LoaderPage />}>
  //             {wrappedComponent}
  //           </React.Suspense>
  //         }
  //       />
  //     );
  //   });
  // };

  return (
    <div className="App">
      <MainPage />
      {/* <AuthProvider>
        <NavigationProvider>
          <ProductProvider> */}
      {/* <MobileMenu /> */}
      {/* <Routes>
              {renderRoutes(publicRoutes)}
              {renderRoutes(protectedRoutes)}
              {renderRoutes(adminRoutes)}
              {renderRoutes(subscriptionRoutes)}
              {renderRoutes(errorRoutes)}
            </Routes>
            <MessageWindow />
          </ProductProvider>
        </NavigationProvider>
      </AuthProvider> */}
    </div>
  );
}

export default App;