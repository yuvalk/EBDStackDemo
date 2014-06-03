var application_root = __dirname;
var express = require("express");
var path = require("path");
var hdfs = new (require("node-webhdfs")).WebHDFSClient({ user: process.env.USER, namenode_host: "localhost", namenode_port: 50070 });

var app = express();

app.get('/api', function (req, res) {
  res.send('Ecomm API is running');
});

app.post('/api/sensor_push', function(req, res) {
	res.send ('sensor_push reached');
});

// Launch server
app.listen(4242);
