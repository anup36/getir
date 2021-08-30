import express from 'express';
import {json} from 'body-parser';
import {recordControllerV1} from './controllers/v1/Record.controller';
import {connectDatabase} from './utils/DatabaseConnection';
import cors from 'cors'

const app = express();

app.use(json());

// Setup CORS
app.use(cors());

// Database connection
connectDatabase();

// Record V1 Controller
app.use('/api/v1', recordControllerV1);

app.listen(process.env.PORT, () => {
    console.log(`Server start PORT ${process.env.PORT}`);
});
