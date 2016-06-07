var fs = require('fs');
//打开文件

/**
	fs.read(fd, buffer, offset, length, position, callback)方法接收6个参数。
	fd是文件描述符，必须接收fs.open()方法中的回调函数返回的第二个参数；
	buffer是存放读取到的数据的Buffer对象；
	offset指定向buffer中存放数据的起始位置；
	length指定读取文件中数据的字节数；
	position指定在文件中读取文件内容的起始位置；
	callback是回调函数，回调函数的参数：
	err用于抛出异常；
	bytesRead是从文件中读取内容的实际字节数；
	buffer是被读取的缓存区对象。
*/
fs.open('txt/testread.txt','r',function(err,fd){
	if(err){
		throw err;
	}
	console.log('open file success');
	var buffer = new Buffer(255);
	//读取文件
	fs.read(fd,buffer,0,10,0,function(err,bytesRead,buffer){
		if(err){
			throw err;
		}
		//打印出buffer中存入的数据
		console.log(bytesRead,buffer.slice(0,bytesRead).toString());
		//关闭文件

		fs.close(fd);
	})
})