const fetch = require('node-fetch');
const { log } = console;

(async () => {
  const ips = await (await fetch('https://kodaktor.ru/j/ips')).json();
  let ips_filtered = [];
  ips.forEach(ip_obj => {
    let ip_obj_filtered = ips_filtered.find(i => i.ip == ip_obj.ip);
    if (ip_obj_filtered == undefined) {
      ips_filtered.push({ 
        "ip": ip_obj.ip,
        "count": 1
      });
    } else {
      ++ip_obj_filtered.count;
    }
  });
  
  ips_filtered.sort((a, b) => b.count - a.count);
  ips_filtered.forEach(x => {
    log(x.ip + ' ' + x.count);
  });
  
  log('Кол-во уникальных адресов = ' + ips_filtered.length);
  log('Кол-во адресов, с которых сайт посещался по одному разу = ' + ips_filtered.reduce((acc, ip) => ip.count == 1 ? acc + 1 : acc, 0));
  log('Макс частота посещения = ' + ips_filtered[0].count);
})();

