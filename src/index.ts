import express from 'express';
import http from "http";
import bodyParser from 'body-parser';
import cookieParser from  'cookie-parser'
import cors from 'cors';
import compression from 'compression'
import mongoose from 'mongoose';
import router from './router';

const app = express();

app.use(cors({
    credentials: true,
}))


app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json());


const  server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server is running on port 8080');
})

const MONGO_URL = 'mongodb+srv://Admin:WjYlqQvFPgwNCQf1@cluster1.chodwcu.mongodb.net/Todo-API?retryWrites=true&w=majority'
mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error))

app.use('/', router())