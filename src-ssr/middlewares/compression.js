import compression from 'compression';
import { ssrMiddleware } from 'quasar/wrappers';

export default ssrMiddleware(async ({ app }) => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 10000);
  });

  app.use(compression({ threshold: 0 }));
});
