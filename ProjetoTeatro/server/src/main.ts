import express, {Express} from 'express';
import cors from 'cors';
import router from './router';
import compression from 'compression';

//Inicialização do express
const app : Express = express();
const port = process.env.PORT || 3000;

//Iniciliazação dos middlewares
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}));
app.use(express.json());
app.use(compression());



app.get('/api/data', (req, res) => {
  console.log("Api data");
  res.json({message: 'Hello World!'});
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
});