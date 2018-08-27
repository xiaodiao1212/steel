'use strict';
const crypto = require('crypto');
// app/extend/application.js
const decryptData = function(sessionKey, appId, encryptedData, iv){

	sessionKey = new Buffer(sessionKey, 'base64')
	encryptedData = new Buffer(encryptedData, 'base64')
  iv = new Buffer(iv, 'base64');
  let decoded;

	try {
		// 解密
		let decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv)
		// 设置自动 padding 为 true，删除填充补位
		decipher.setAutoPadding(true)
    decoded = decipher.update(encryptedData, 'binary', 'utf8');
    console.log(decoded);
		decoded += decipher.final('utf8')

		decoded = JSON.parse(decoded)

	} catch (err) {
    console.log(err);
		throw new Error('Illegal Buffer')
  }
  console.log("decoded");
  console.log(decoded);
	if (decoded.watermark.appid !== appId) {
		throw new Error('Illegal Buffer')
	}
  	return decoded
}

const getJsonData = function(dbData){
  const jsonData = JSON.stringify(dbData);
  return JSON.parse(jsonData);
}

module.exports = {
  getJsonData,
  decryptData
};
