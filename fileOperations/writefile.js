var fs = require('fs'); // 引入fs模块

// 写入文件内容（如果文件不存在会创建一个文件）
// 写入时会先清空文件
//flag传递的值，r代表读取文件，，w代表写入文件，a代表追加写入文件，还有其他的值不作详细介绍。
fs.writeFile('txt/test2.txt', 'MIMI MIMI', { 'flag': 'a' },  function(err) {
    if (err) {
        throw err;
    }

    console.log('Save!!!');

    // 写入成功后读取测试
    fs.readFile('txt/test2.txt', 'utf-8', function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });
});