const express = require('express');

const addMiddleware = require('./middleware/decorate.middleware');
const delegateRoutes = require('./routers/delegate.routers');

const app = express();
const port = process.env.PORT || 8080;

addMiddleware(app);
delegateRoutes(app);

app.listen(port, () => {
    console.log(`===================================\n Server Listening on port ${port}. \n ===================================`);
});