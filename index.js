import express from "express";
import bodyParser from "body-parser";
import issueRoutes from "./routes/issues.js";
import usersRoute from "./routes/users.js";
const app = express();
import cors from "cors";
const PORT = 5000;
app.use(bodyParser.json());

app.use('/issues', cors(),issueRoutes);
app.use('/users',cors(),usersRoute);
app.get('/',(req,res)=>{
    res.send('Welcome to the backend world!');
})
app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));