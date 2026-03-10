const https = require('https');
const url = 'https://github-readme-streak-stats.herokuapp.com/?user=makarenko-vladyslav&hide_border=true&background=000000&title_color=E3FF00&text_color=ffffff&icon_color=E3FF00&ring=E3FF00&currStreakNum=E3FF00&sideNums=ffffff&currStreakLabel=ffffff&sideLabels=ffffff&dates=888888&fire=E3FF00'\;
https.get(url, (res) => {
  let data = ''; res.on('data', c => data += c);
  res.on('end', () => console.log(data.substring(0, 1000)));
});
