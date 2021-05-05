const express = require('express');
const app = express();
const { usersRouter } = require('./user-router')

function loggerMiddleware(req, res,next) {
    console.log(`[${req.method}] - ${req.url}`)
    next();
};

app.use(loggerMiddleware);

app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.statusCode = 418;
    res.setHeader('X-Custom-Header', 'skillfactory');
    res.send('I have GET');
});

function authMiddleware(req, res, next) {
    if (req.headers['authorization'] !== undefined) {
        next();
    } else {
        res.statusCode = 401;
        res.send('Error! You need to authorize');
    }
}

app.post('/', authMiddleware, (req, res) => {
    console.log(req.url);
    console.log(req.headers);
    res.send('I have POST');
});

app.put('/', (req, res) => {
    res.send('I have PUT');
});

app.delete('/', (req, res) => {
    res.send('I have DELETE');
});


app.listen(8000, () => {
    console.log('Server 8000');
});