self.onmessage = (e) => {
	console.log("子线程收到的消息:", e.data);
	// self.postMessage();
};

// 3秒后关闭线程
setTimeout(() => {
	self.postMessage('close');
}, 3000);
