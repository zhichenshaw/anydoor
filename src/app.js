const http = require('http');
const defaultConfig = require('./config/defaultConfig');
const path = require('path');
const chalk = require('chalk');
const route = require('./helper/route');
const openUrl = require('./helper/open');

class Server {
  constructor(config) {
    this.conf = Object.assign({}, defaultConfig, config);
  }

  start() {
    const {hostname, port, root} = this.conf;
    const server = http.createServer((req, res) => {
      const {url} = req;
      const filePath = path.join(root, url);

      route(req, res, filePath, this.conf);
    });


    server.listen(port, hostname, () => {
      const addr = `http://${hostname}:${port}`;
      console.warn(`server running at ${chalk.green(addr)}`);
      openUrl(addr);
    });
  }
}

module.exports = Server;

