import express from "express";
import * as  dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoultes.js';

dotenv.config();
//pool our envirement variable from DotEnv

const app = express();
//initialisation of our express application
app.use(cors());
//app.use it's an additional middleware
app.use(express.json({limit: '50mb'}));
//we defin the data size acceptable by the expess

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
//we create an endpoint api where we can connect our front side with the back side

app.get('/', async (req,res) => {
    res.send("Hello from DALL-E");
});
//simple async function sended to the url '/'
//the first parameter should be uselly the req and the second that we use in our function is res
const startServer = async ()=>{
    try {
        connectDB(process.env.MONGODB_URL)
    app.listen(8080,()=>{
        console.log("server runing on 8080")
    })        
    } catch (error) {
        console.log(error);
    }

}
//the last async function to listen to our app where we can specified our port server
startServer();