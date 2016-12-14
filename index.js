var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(__dirname));

app.use(function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(process.env.port || 9000);
