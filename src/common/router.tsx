import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import {
  Master, Create, Frame, Edit,
} from '../pages';

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
const routerEdit: RouteObject = {
  id: 'edit',
  path: '/edit/:id',
  element: <Edit />,
};
const routerApp: RouteObject = {
  id: 'frame',
  element: <Frame />,
  path: '/',
  children: [routerMaster, routerCreate, routerEdit],
};

const router = createBrowserRouter([routerApp]);

export default router;
export {
  routerMaster,
  routerCreate,
  routerEdit,
  routerApp,
};
