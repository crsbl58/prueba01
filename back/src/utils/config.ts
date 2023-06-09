require("custom-env").env(process.env.NODE_ENV);

const config = {
  env: process.env.ENV,
  apiKey: process.env.API_KEY,
  serverSolutoria:"https://postulaciones.solutoria.cl",
  apiPort: 3001,

};

export default config;
