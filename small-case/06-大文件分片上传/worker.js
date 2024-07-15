// 引入外部脚本
importScripts("./utils.js");
importScripts('https://cdn.bootcdn.net/ajax/libs/spark-md5/3.0.2/spark-md5.min.js')

self.onmessage = async (e) => {
  // 根据文件生成文件 hash
	const chunkHash = await getHash(e.data.file);
	e.data.hash = chunkHash;

  // hash生成成功后，发送消息给主线程，开始上传分片
	self.postMessage(e.data);
};
