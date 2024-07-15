/**
 * 文件分片
 * @param {*} file 文件
 * @param {*} size 分片大小， 默认 5M
 * @returns 分片后的 chunk 数组
 */
function createFileChunk(file, size = 2 * 1024 * 1024) {
	const fileChunkList = [];
	let currentSize = 0;
	let index = 0;
	while (currentSize < file.size) {
		fileChunkList.push({
			file: file.slice(currentSize, currentSize + size),
			index,
			hash: "",
		});
		currentSize += size;
		index++;
	}
	return fileChunkList;
}

/**
 * 生成文件hash
 * @param {*} file 文件Blob对象
 * @returns Promise
 */
function getHash(file) {
	return new Promise((resolve) => {
		const fileReader = new FileReader();
		fileReader.readAsArrayBuffer(file);
		fileReader.onload = function (e) {
			let fileMd5 = SparkMD5.ArrayBuffer.hash(e.target.result);
			resolve(fileMd5);
		};
	});
}
