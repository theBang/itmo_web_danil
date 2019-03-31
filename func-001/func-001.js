const concat = require('goss_concat');
const rgb = (r = 255, g = 255, b = 255) => concat('rgb(', r, ', ', g, ', ', b, ')');
console.log(rgb(12, 12, 12));

//by Демашов Д.