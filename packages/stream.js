/**
  * stream流
  * Readable－可读
  * Writable－可写
  * Duplex－可读可写
  * Transform - 操作被写入数据，然后读出结果。
  * 
  * 流操作
  * data - 当有数据可读时触发。
  * end - 没有更多的数据可读时触发。
  * error - 在接收和写入过程中发生错误时触发。
  * finish - 所有数据已被写入到底层系统时触发
 */
var fs = require('fs');
var fnNameCollections = {};

fnNameCollections.readerStream = function() {// 从流中读取数据
  var data = '';
  var readerStream = fs.createReadStream('test.txt');
  readerStream.setEncoding('UTF8');
  readerStream.on('data', function(chunk) {
    data += chunk;
  });
  readerStream.on('end', function() {
    console.log(data);
  })
  readerStream.on('error', function(err) {
    console.log(err.stack);
  })
  console.log('流读取数据完毕！')
  // 流读取数据完毕！
  // test.text
}

fnNameCollections.writeStream = function() {// 写入流
  var data = '我是要写入的内容';
  var writeStream = fs.createWriteStream('output.txt');
  writeStream.write(data, 'UTF8');
  writeStream.end();
  writeStream.on('finish', function() {
    console.log('写入完成')
  })
  writeStream.on('error', function(err) {
    console.log(err.stack)
  })
  console.log('写入流完毕')
  // 写入流完毕
  // 写入完成
}

fnNameCollections.pipeStream = function() {//管道流
  var readerStream = fs.createReadStream('test.txt');
  var writeStream = fs.createWriteStream('output.txt');
  readerStream.pipe(writeStream);
  console.log('管道流执行完毕')
}

fnNameCollections.zlib = function() {//链式流
  var zlib = require('zlib');
  
  // 压缩 input.txt 文件为 input.txt.gz
  fs.createReadStream('test.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('test.txt.gz'))
  console.log('文件压缩完成')


  // 解压 input.txt.gz 文件为 input.txt
  fs.createReadStream('test.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));
  console.log("文件解压完成。");
}
module.exports = fnNameCollections;
