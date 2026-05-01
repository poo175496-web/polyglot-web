import { createWebAppBlueprint } from './blueprint';

export function createAppShellModel() {
  const blueprint = createWebAppBlueprint();

  return {
    appName: blueprint.appName,
    navigation: blueprint.navigation,
    routes: blueprint.routes,
  };
}
