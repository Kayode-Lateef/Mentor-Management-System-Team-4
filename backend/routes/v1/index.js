import express from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import notificationRoute from './notification.route';
import settingRoutes from './setting.route';
import privacyRoutes from './privacy.route';
import profileRoutes from './profile.route';
import programRoutes from './program.route';
import faqRoutes from './faq.route';

import config from '../../config/config';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/notification',
    route: notificationRoute,
  },
  {
    path: '/setting',
    route: settingRoutes,
  },
  {
    path: '/privacy',
    route: privacyRoutes,
  },
  {
    path: '/profile',
    route: profileRoutes,
  },
  {
    path: '/program',
    route: programRoutes,
  },
  {
    path: '/faqs',
    route: faqRoutes,
  },
];

const devRoutes = [
  // routes available only in development mode
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

export default router;
