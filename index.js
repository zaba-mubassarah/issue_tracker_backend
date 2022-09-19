import express from "express";
import bodyParser from "body-parser";
import issueRoutes from "./routes/issues.js";

const app = express();
const PORT = 5000;
app.use(bodyParser.json());

app.use('/issues',issueRoutes);
app.get('/',(req,res)=>{
    res.send('Welcome to the backend world!');
})
app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));