"use strict"
const Module = 'fs';

/**
 * 小结
 */

const fs = require('fs');
const colors = require('colors');

const path = '/tmp/test.text';

// 读文件
var readFile = ()=>{
  fs.readFile(path, 'utf-8', (err, data)=>{
    if(err) throw err;
    console.log("文件内容为：", data);
  })
}
// 写文件
var writeFile = ()=>{
  fs.writeFile(path, "hello fs", 'utf-8', (err)=>{
    if (err) throw err;
    console.log("文件被写入成功！")
  })
}
// 文件重命名
var renameFile = ()=>{
  fs.rename(path, 'word.text', (err)=>{
    console.log(err)
  })
}

// 生成文件
var createFile = ()=>{
  const path = 'tmp/test.text';
  const file = fs.existsSync(path);
  if (file) {
    console.log('文件已经存在！')
  } else {
    fs.createFile(path,(err, data)=>{
      if (err) throw err;
      console.log('data', data)
    })
  }
}


// 生成文件夹
var createDir = (path)=>{
  // 文件夹是否存在
  var exists = fs.existsSync(path);
  if (!exists) {
    // recursive创建父文件夹
    var dir = fs.mkdirSync(path+'/files', {recursive: true});
    // 读取文件夹内容
    var files = fs.readdirSync(path);
    console.log('files', files)
  } else {
    console.log('文件已经存在！')
  }
}
// 删除文件夹
var delDir = (path)=>{
  // 删除文件夹(只能删除空的文件夹)
  var exists = fs.existsSync(path);
  if (exists) {
    fs.rmdir(path, (err)=>{
      if(err) {
        console.log('文件夹删除失败！进行深删除')
        delDeepDir(path);
      } else {
        console.log('文件夹成功删除！')
      }
    });
  } else {
    console.log('文件夹不存在！')
  }
}
// 删除非空文件夹: 先把文件夹下文件删除，在删除该文件夹
var delDeepDir = (path)=>{
  var files = fs.readdirSync(path);
  console.log('dir files:', colors.magenta(files))
  files.forEach((file)=>{
    var p = path+'/'+file;
    var stat = fs.statSync(p);//判断一个位置是否是文件或者是文件夹
    if(stat.isFile()) {
      fs.unlink(p);
    } else {
      delDeepDir(p);
    }
  });
  fs.rmdirSync(path);
}

module.exports = (app)=>{
  console.log(colors.green('\n******************************** %s ********************************\n'), Module)
  console.log(colors.brightRed("location: %s"), __filename);  
  const dir = 'tmp'
  // createDir(dir);
  // delDir(dir);
  // createFile();

  // readFile();
  // renameFile();
  // writeFile();
}