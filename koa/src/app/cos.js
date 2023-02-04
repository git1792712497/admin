const request = require('request');
const COS = require('cos-nodejs-sdk-v5');
const cos = new COS({
	getAuthorization: function (options, callback) {
		// 初始化时不会调用，只有调用 cos 方法（例如 cos.putObject）时才会进入
		// 异步获取临时密钥
		request({
			url: 'https://example.com/sts',
			data: {
				// 可从 options 取需要的参数
			}
		}, function (err, response, body) {
			try {
				var data = JSON.parse(body);
				var credentials = data.credentials;
			} catch(e) {}
			if (!data || !credentials) return console.error('credentials invalid');
			callback({
				TmpSecretId: credentials.tmpSecretId,        // 临时密钥的 tmpSecretId
				TmpSecretKey: credentials.tmpSecretKey,      // 临时密钥的 tmpSecretKey
				SecurityToken: credentials.sessionToken, // 临时密钥的 sessionToken
				ExpiredTime: data.expiredTime,               // 临时密钥失效时间戳，是申请临时密钥时，时间戳加 durationSeconds
			});
		});
	}
});
