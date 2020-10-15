
// const express = require('express')
// const apiRoutes = require("./routes/apiroutes");
// const htmlRoutes = require("./routes/htmlroutes");
// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);


// app.listen(PORT, () => {
//     console.log(`App listening on PORT ${PORT}`);
//   })

const express = require('express');
const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');
// Initialize the app and create a portconst 
app = express();
const PORT = process.env.PORT || 3001;
// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));