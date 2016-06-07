var fs = require('fs');//引入fs模块
fs.readFile('txt/test1.txt',function(err,data){
	 // 读取文件失败/错误
    if (err) {
        throw err;
    }
    // 读取文件成功
    console.log('toString',data.toString());
})
// 设置编码格式
fs.readFile('txt/test1.txt', 'utf-8', function(err, data) {
    // 读取文件失败/错误
    if (err) {
        throw err;
    } 
    // 读取文件成功
    console.log('utf-8: ', data.toString());
});