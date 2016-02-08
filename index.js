var moment = require('moment-timezone/moment-timezone');
moment.tz.add('Japan|JCST JST JDT|-90 -90 -a0|0121212121|-1iw90 pKq0 QL0 1lB0 13X0 1zB0 NX0 1zB0 NX0');
moment.tz.setDefault('Japan');
module.exports = moment;
