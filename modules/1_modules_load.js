/*
* @Author: ZhangZheyi
* @Date:   2016-06-22 16:22:35
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-06-22 17:27:58
*/

// 调用自定义模块

'use strict';

/*
    一个Node.js文件就是一个模块，这个文件可能是Javascript代码、JSON或者编译过的C/C++扩展。
    重要的两个对象：
    require是从外部获取模块
    exports是把模块接口公开    
*/

var counter = require("./1_modules_custom_counter");
console.log('第一次调用模块[1_modules_custom_counter]');

counter.setOutputVal(10);               //设置从10开始计数
counter.setIncrement (10);             //设置增量为10

counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();

/*
    require多次调用同一模块不会重复加载
*/
var counter = require("./1_modules_custom_counter");
console.log('第二次调用模块[1_modules_custom_counter]');
counter.printNextCount();

// 运行可以发现通过exports和module.exports对外公开的方法都可以访问！
// 示例中可以看到，我两次通过require('./1_modules_custom_counter')获取模块，但是第二次引用后调用printNextCount()方法确从60开始~~~
// 原因是node.js通过requirerequire多次调用同一模块不会重复加载，Node.js会根据文件名缓存所有加载过的文件模块，所以不会重新加载了

// 注意：通过文件名缓存是指实际文件名，并不会因为传入的路径形式不一样而认会是不同的文件