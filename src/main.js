
const PATH = require('path');
const express = require('express');
const horizon = require('@horizon/server');

const app = express();
const ROOT = '.';

const pageRouter = express.Router();

pageRouter.get('*', (req, res, next) => {
    console.log(req.url);
    if(req.url.indexOf('/public') < 0) {
        req.url = '/public/index.html';    
    }
    next();
});

app.use('/', pageRouter);
app.use('/public', express.static(PATH.resolve(__dirname, ROOT, 'public')));

const http_server = app.listen(8181);
const options = {
    project_name: 'simpleapp',
    auth: {       
      token_secret: 'n36wVGoUE/4gJGY9vDS3+rhkaFQByf9XmsWEqrdQcIXAvUqzjgbq6eJz7MMBd51Q/GYT6PtFxWP+JYy8J4m06w==',
      allow_anonymous: true,
      allow_unauthenticated: true,
    },
   };
const horizon_server = horizon(http_server, options);

console.log('Listening on port 8181.');