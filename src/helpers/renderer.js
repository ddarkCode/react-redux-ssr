import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Routes from '../clients/Routes';

module.exports = (req) => {
  console.log('req.path: ', req.path);
  // console.log('req.url: ', req.url);
  const content = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Routes />
    </StaticRouter>
  );

  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Express App</title>
  </head>
  <body>
    <div id="root">${content}</div>

    <script src="/bundle.js"></script>
  </body>
</html>
`;
};
