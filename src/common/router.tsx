import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Master, Create, Frame } from '../pages';

const routerMaster: RouteObject = {
  id: 'master',
  path: '/',
  element: <Master />,
};
const routerCreate: RouteObject = {
  id: 'create',
  path: '/create',
  element: <Create />,
};
const routerApp: RouteObject = {
  id: 'frame',
  element: <Frame />,
  path: '/',
  children: [routerMaster, routerCreate],
};

const router = createBrowserRouter([routerApp]);

export default router;
export {
  routerMaster,
  routerCreate,
  routerApp,
};
