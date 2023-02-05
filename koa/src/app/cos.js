const COS = require('cos-nodejs-sdk-v5');
const cos = new COS({
	SecretId: 'AKIDzuex87t69zaw3xd4OgmeLsELyoSwCG7k', // 推荐使用环境变量获取；用户的 SecretId，建议使用子账号密钥，授权遵循最小权限指引，降低使用风险。子账号密钥获取可参考https://cloud.tencent.com/document/product/598/37140
	SecretKey: 'ShlbDD3RdbMvFMFLG0OaZJrAG9nDQvTs', // 推荐使用环境变量获取；用户的 SecretKey，建议使用子账号密钥，授权遵循最小权限指引，降低使用风险。子账号密钥获取可参考https://cloud.tencent.com/document/product/598/37140
});

module.exports = cos
