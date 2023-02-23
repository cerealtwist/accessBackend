const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz')
const categoryRoute = require('./router/category')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
db.sequelize.sync()

app.get('/', (req, res) => {
    res.send('Access Backend | Express.js');
});

app.use('/api/quizzes', quizRoute)
app.use('/api/categories', categoryRoute)

app.listen(port, () => console.log('App listening on port http://localhost:${port}!'));