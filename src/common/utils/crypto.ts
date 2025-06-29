import { createCipheriv, createDecipheriv } from 'crypto';

// 加密
export function encrypt(key, iv, data: string) {
  let decipher = createCipheriv('aes-128-cbc', key, iv);
  // decipher.setAutoPadding(true);
  return decipher.update(data as string, 'binary', 'hex') + decipher.final('hex');
}

// 解密
export function decrypt(key, iv, crypted: string) {
  crypted = Buffer.from(crypted, 'hex').toString('binary');
  let decipher = createDecipheriv('aes-128-cbc', key, iv);
  return decipher.update(crypted, 'binary', 'utf8') + decipher.final('utf8');
}

// key, iv必须是16个字节
let key = 'fa70caf42a859161';
let iv = 'ffb58ca3f2ad1e4d';
let data = '198885';
let crypted = encrypt(key, iv, data);
console.log('加密结果', crypted);
let decrypted = decrypt(key, iv, crypted);
console.log('解密结果', decrypted);
