const Hapi = require('@hapi/hapi');
const route = require('./route');


const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.start(route);
  console.log(`server runing at ${server.info.uri}`);
};


init();
