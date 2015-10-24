/**
 * fis.baidu.com
 */
 
var babel = require('babel-core');

module.exports = function (content, file, opts) {
  if (!file.isES6) return content;
  opts.moduleId = file.getId();
  var result = babel.transform(content, opts);
  return result.code;
};
