// 要通信的两个标签页应该在同一个广播频道中

// 创建广播通道
const chanel = new BroadcastChannel("myChanel");

/**
 * 发送消息
 * @param {String} type 消息类型
 * @param {String} msg 消息内容
 */
function sendMessage(type, msg) {
  chanel.postMessage({ type, msg });
}

/**
 * 接受消息
 * @param {Function} callback
 */
function receiveMessage(callback) {
  chanel.onmessage = function (event) {
    callback && callback(event.data);
  };
}
