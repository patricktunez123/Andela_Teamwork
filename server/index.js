import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import signupRouter from './routes/signup';
import signin from './routes/signin';
import articles from './routes/articles';
import feeds from './routes/feeds';


const app = express();

app.use(express.json());

app.use('/teamwork', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1/auth/signup', signupRouter);
app.use('/api/v1/auth/signin', signin);
app.use('/api/v1/articles', articles);
app.use('/api/v1/feeds', feeds);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});


export default app;
