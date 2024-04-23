const liveServer = require('live-server');

const params = {
  root: './public',
  open: true,
  file: 'index.html',
};

liveServer.start(params);
