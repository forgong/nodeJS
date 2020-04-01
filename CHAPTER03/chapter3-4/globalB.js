// 노드 내장 객체 알아보기
const A = require('./globalA');

global.messge = '안녕하세요';
console.log(A());