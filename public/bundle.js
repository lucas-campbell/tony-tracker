var browserify = require('browserify');
var b = browserify();
b.add('main.js');
b.bundle().pipe(process.stdout);
