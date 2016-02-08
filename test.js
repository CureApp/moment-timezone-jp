var moment = require('./index')
var timezoneExpression = moment().toString().split(' ').pop()
console.assert(timezoneExpression === 'GMT+0900')
console.log('OK!timezoneは日本に設定されてます')
