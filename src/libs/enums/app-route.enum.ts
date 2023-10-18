const AppRoute = {
  ROOT: '/',
  ANY: '*',
  TASK: '/:taskId',
} as const;

export { AppRoute };
