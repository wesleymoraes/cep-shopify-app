import 'dotenv/config';
import express from 'express';
import next from 'next';
import uploadCepRoutes from './routes/upload-ceps.js';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: '../frontend' });
const handle = nextApp.getRequestHandler();

const port = process.env.PORT || 3000;

nextApp.prepare().then(() => {
  const app = express();
  app.use(express.json());
  app.use('/api', uploadCepRoutes);

  app.all('*', (req, res) => handle(req, res));

  app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
