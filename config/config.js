/**
  作者：Zhouxw
  创建时间：2021-01-22
  描述：接口地址统一配置，本地，测试服务器，正式服务器 ，登录地址
 */

var url = {
  // 是否是本地
  isLocal: false,

  // 本地测试地址 
  localTest: 'http://localhost:8080/front/mini/',

  // 正式服务器地址 
  serverTest: 'https://dade.guojizhuang.site/front/mini/'
};
var ctx = '';

// 判断是否是本地
if (url.isLocal) {
  ctx = url.localTest;
} else {
  ctx = url.serverTest;
};


module.exports = {
  ctx: ctx
};
