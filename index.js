 /**
 * index.js
 */
 var server = require("./server");
 var router = require("./router");
 var requestHandlers = require("./requestHandlers");

 var handle = {};
 handle["/yu/"] = requestHandlers.start;
 handle["/yu/start"] = requestHandlers.start;
 handle["/yu/upload"] = requestHandlers.upload;
 handle["/yu/show"] = requestHandlers.show;

 server.start(router.route, handle);

