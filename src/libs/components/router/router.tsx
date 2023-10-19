import { lazy } from 'react';
import { Route } from 'react-router-dom';

import { RouterProvider } from '../router-provider/router-provider';
import { AppRoute } from '../../enums';
import { PageLayout } from '../page-layout/page-layout';

const HomePage = lazy(() => import('../../../pages/homepage/homepage.tsx'));
const NotFound = lazy(() => import('../../../pages/not-found/not-found.tsx'));

const Router = () => {
  return (
    <RouterProvider>
      <Route path={AppRoute.ROOT} element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path={AppRoute.ANY} element={<NotFound />} />
      </Route>
    </RouterProvider>
  );
};

export { Router };
export { Outlet as RouterOutlet } from 'react-router-dom';
