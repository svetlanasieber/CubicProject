import express from 'express';
import config from './config/index.js';
import expressConfig from './config/express.js';
import mongooseConfig from './config/mongoose.js';
import routes from './router.js';

const app = express();
expressConfig(app);
mongooseConfig(app);
app.use(routes);

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));


