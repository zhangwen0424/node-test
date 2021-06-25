"use strict"
const Module = 'nconf';

/**
 * nconf[npm包]
 * node.js中 文件、环境变量、命令行参数以及原子对象整合 提供分层配置,使用简单的key-value模式，来进行便捷本地或是远程信息的存储
 * 
 */

const colors = require('colors')
const nconf = require(Module)


let handle = ()=>{
  nconf.argv()
    .env()
    .file({file: __dirname+'/config.json'});
  
  console.info('dev:', nconf.get('dev'));
  
  console.info('database: ', nconf.get('databse'), nconf.get('dev'));
  // console.log('name', nconf.get('dev'))
}




  // handle();

module.exports = ()=>{
  console.log(colors.green('\n******************************** %s ********************************\n'), Module)
  console.log(colors.brightRed("location: %s %s"), __filename, __dirname)
  handle();
}