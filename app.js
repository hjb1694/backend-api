const express = require('express');
const { PORT, HOST } = require('./config/config');
const { sequelize } = require('./models');

const app = express();
app.use(express.json());

//import routes 
const authRoutes = require('./routes/auth');

//use routes 
app.use('/api/auth', authRoutes);

sequelize.sync()
.then(() => {
    app.listen(PORT, HOST, () => console.log(`Listening on port ${PORT} on ${HOST}!`));
})