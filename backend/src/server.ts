import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 5000;

app.get('/api', (req, res) => {
    res.json({ message: "Api online." });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
