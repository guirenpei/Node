var fs = require('fs'); // 引入fs模块

// 打开文件
fs.open('txt/testwrite.txt', 'w', function(err, fd) {
    if (err) {
        throw err;
    }
    console.log('open file success.');
    var buffer = new Buffer('戴琳娜 Love');
    // 读取文件
    fs.write(fd, buffer, 0, 14, 0, function(err, writeten, buffer) {
        if (err) {
            throw err;
        }

        console.log('write success.');
        // 打印出buffer中存入的数据
        console.log(writeten, buffer.slice(0, writeten).toString());

        // 关闭文件
        fs.close(fd);
    });
});