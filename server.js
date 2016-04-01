/**
 * Created by nathaliesicard on 3/28/16.
 */
var koa = require('koa');
var range = require('koa-range');
var serve =require('koa-better-static');



var app = koa();
app.use(range);
app.use(serve('dist', {index: 'index.html'}));

var port = process.env.PORT || 8888;
app.listen(port);
console.log('Listening on port : ' + port);