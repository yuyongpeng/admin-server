import errorEx = require('error-ex');

var DaopSjtHideError = errorEx('DaopSjtError 调用daop的苏结通接口（sjt/hide）错误', {});
var DstampError = errorEx('DstampError 调用 dstamp 的golang客户端 错误', {});

// var err = new DaopSjtHideError();
// err.name; //-> JSONError
// throw err; //-> JSONError: error

export { DaopSjtHideError, DstampError };
