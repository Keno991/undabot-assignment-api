import express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import bodyParser from 'body-parser';

import apiRoutes from './routes/api';
import corsSetup from './middlewares/cors-setup';

const app = express();

corsSetup.run(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', apiRoutes)

export default app;