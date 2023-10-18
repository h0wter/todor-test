import { Route } from 'react-router-dom';
import { RouterProvider } from '../router-provider/router-provider';
import { AppRoute } from '../../enums';
import { PageLayout } from '../page-layout/page-layout';

const Router = () => {
  return (
    <RouterProvider>
      <Route path={AppRoute.ROOT} element={<PageLayout />} />
    </RouterProvider>
  );
};

export { Router };
export { Outlet as RouterOutlet } from 'react-router-dom';
