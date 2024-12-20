import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDb from './config/mongoDb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';

//App config
const app = express();
const port = process.env.PORT || 8000;
connectDb();
connectCloudinary();

//Middlewares
app.use(express.json());
app.use(cors());

//API endpoint
app.use('/api/admin', adminRouter);
app.get('/', (req, res) => {
	res.send('Api Working');
});

app.listen(port, () => console.log(`App listening on port ${port}`));
