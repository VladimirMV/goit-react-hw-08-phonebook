import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'modules/SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
import { Loader } from './Loader/Loader';
import { PrivateRoute } from './PrivateRoute';

// const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
// const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
// const RegistrationPage = lazy(() => import('pages/RegistrationPage/RegistrationPage'));
// const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

import HomePage from '../pages/HomePage/HomePage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
