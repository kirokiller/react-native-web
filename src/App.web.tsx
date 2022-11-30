import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import routes from './routes';

// FIXME 缺少 inteface NavigationRouteConfigMap
const routeConfig: any = {};

routes.forEach(route => {
  routeConfig[route.name] = {
    screen: route.screen,
  };
});

export default createBrowserApp(createSwitchNavigator(routeConfig));
