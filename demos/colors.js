"use strict"
var Module = 'colors';
/**
 * colors[npm包]
 * 
 * 用法：colors.yellow("打印内容") 或 "打印内容".red
 * 
 * 颜色
 * 文本颜色：black/red/green/yellow/blue/magenta/cyan/white/gray/grey
 * 高亮文本颜色：brightRed/brightGreen/brightYellow/brightBlue/brightMagenta/brightCyan/brightWhite
 * 背景颜色：bgBlack//bgRed/bgGreen/bgYellow/bgBlue/bgMagenta/bgCyan/bgWhite/bgGray/bgGrey
 * 高亮背景颜色：gBrightRed/bgBrightGreen/bgBrightYellow/bgBrightBlue/bgBrightMagenta/bgBrightCyan/bgBrightWhite
 * 样式：reset/bold/dim(暗)/italic(斜体)/underline/inverse/hidden/strikethrough(删除样式)/
 * 彩字：rainbow/zebra/america/trap/random
 * 
 * 复合使用：
 * console.log(colors.red.underline('i like cake and pies'));
 * colors.setTheme({ custom: ['red', 'underline', 'bold'] }); console.log('custom'.custom);
 */

const colors = require('colors');

// text colors
let textColors = ()=> {
  console.log(colors.yellow('==> [text colors: colors.green()] or "text".green'))
  console.log(`black/red/green/yellow/blue/magenta/cyan/white/gray/grey`)
  console.log(colors.black('back ')+colors.red('red ')+colors.green('green ')
    +colors.yellow('yellow ')+colors.blue('blue ')+colors.magenta('magenta ')
    +colors.cyan('cyan ') +colors.white('white ')+colors.gray('gray ')+colors.grey('grey '))
}
// bright text colors
let brightTextColors = ()=>{
  console.log(colors.yellow('==> [bright text colors: colors.brightRed()]'))
  console.log(`brightRed/brightGreen/brightYellow/brightBlue/brightMagenta/brightCyan/brightWhite`)
  console.log(colors.brightRed('brightRed ')+colors.brightGreen('brightGreen ')+colors.brightYellow('brightYellow ')
    +colors.brightBlue('brightBlue ')+colors.brightMagenta('brightMagenta ')+colors.brightCyan('brightCyan ')
    +colors.brightWhite('brightWhite '))
}
// background colors
let backgroundColors = ()=>{
  console.log(colors.yellow('==> [background colors: colors.bgRed()] or "text".bgRed'))
  console.log(`bgBlack//bgRed/bgGreen/bgYellow/bgBlue/bgMagenta/bgCyan/bgWhite/bgGray/bgGrey`)
  console.log('bgBlack'.bgBlack+' '+'bgRed'.bgRed+' '+'bgGreen'.bgGreen+' '+'bgYellow'.bgYellow+' '
    +'bgBlue'.bgBlue+' '+'bgMagenta'.bgMagenta+' '+'bgCyan'.bgCyan+' '+'bgWhite'.red.bgWhite+' '
    +'bgGray'.bgGray+' '+'bgGrey'.bgGrey)
}
// bright background colors
let brightBackgroundColor = ()=>{
  console.log(colors.yellow('==> [bright background colors: colors.bgBrightRed()] or "text".bgBrightRed'))
  console.log(`bgBrightRed/bgBrightGreen/bgBrightYellow/bgBrightBlue/bgBrightMagenta/bgBrightCyan/bgBrightWhite`)
  console.log('bgBrightRed'.bgBrightRed+' '+'bgBrightGreen'.bgBrightGreen+' '+'bgBrightYellow'.bgBrightYellow+' '
    +'bgBrightBlue'.bgBrightBlue+' '+'bgBrightMagenta'.bgBrightMagenta+' '+'bgBrightCyan'.bgBrightCyan+' '
    +'bgBrightWhite'.red.bgBrightWhite)
}
// style
let style = ()=>{
  console.log(colors.yellow('==> [style: colors.bgRed()] or "text".bgRed'))
  console.log(`reset/bold/dim/italic/underline/inverse/hidden/strikethrough/`)
  console.log('reset'.red.reset+ ' bold'.bold+' dim'.dim+' italic'.italic+' underline'.underline
    +' inverse'.inverse+' hidden'.hidden+' strikethrought'.strikethrough)
}
// extras
let extras = ()=>{
  console.log(colors.yellow('==> [extras: colors.rainbow()] or "text".bgRed'))
  console.log(`rainbow/zebra/america/trap/random`)
  console.log(' rainbow'.rainbow+' zebra'.zebra+' america'.america+' trap'.trap+ 'random'.random)
}
// combining colors
let combiningColors = ()=>{
  colors.setTheme({
    custom: ['red', 'underline', 'bold']
  });
 
  console.log(colors.red.underline('i like cake and pies'))
  console.log('custom'.custom);
}



module.exports = ()=>{
  console.log(colors.green('\n******************************** %s ********************************\n'), Module)
  console.log(colors.brightRed("location: %s"), __filename)
  textColors()
  brightTextColors()
  backgroundColors()
  brightBackgroundColor()
  style()
  extras()
  combiningColors()
}