const https = require('https');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '../assets');

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

const fetchSvg = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'makarenko-vladyslav-portfolio-builder'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // handle redirect
        return fetchSvg(res.headers.location).then(resolve).catch(reject);
      }
      
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

const STATS_URL = 'https://gh-readme-stats.vercel.app/api?username=makarenko-vladyslav&show_icons=true&title_color=E3FF00&text_color=ffffff&icon_color=E3FF00&bg_color=000000&hide_border=true&hide_title=true&hide_rank=true';
const STREAK_URL = 'https://github-readme-streak-stats.herokuapp.com/?user=makarenko-vladyslav&hide_border=true&background=000000&title_color=E3FF00&text_color=ffffff&icon_color=E3FF00&ring=E3FF00&currStreakNum=E3FF00&sideNums=ffffff&currStreakLabel=ffffff&sideLabels=ffffff&dates=888888&fire=E3FF00';
const LANGS_URL = 'https://gh-readme-stats.vercel.app/api/top-langs/?username=makarenko-vladyslav&layout=compact&title_color=E3FF00&text_color=ffffff&bg_color=000000&hide_border=true&hide_title=true';
const ACTIVITY_URL = 'https://github-readme-activity-graph.vercel.app/graph?username=makarenko-vladyslav&bg_color=000000&color=E3FF00&line=E3FF00&point=ffffff&area=true&hide_border=true&hide_title=true';
const SNAKE_URL = 'https://raw.githubusercontent.com/makarenko-vladyslav/makarenko-vladyslav/output/github-contribution-grid-snake-dark.svg';
const GRAPH3D_URL = 'https://raw.githubusercontent.com/makarenko-vladyslav/makarenko-vladyslav/main/profile-3d-contrib/profile-night-green.svg';
const QUOTE_URL = 'https://quotes-github-readme.vercel.app/api?type=horizontal&bg_color=000000&title_color=E3FF00&text_color=ffffff&icon_color=E3FF00&border_color=000000';

async function buildArchitectureSection() {
  console.log('Fetching architecture SVGs...');
  
  const [statsSvg, streakSvg, langsSvg] = await Promise.all([
    fetchSvg(STATS_URL),
    fetchSvg(STREAK_URL),
    fetchSvg(LANGS_URL)
  ]);

  // Clean SVGs (remove xml tags, inner background rects)
  const cleanSvg = (svg) => {
    if (!svg) return '';
    let cleaned = svg.replace(/<\?xml.*?\?>/g, '').trim();
    cleaned = cleaned.replace(/<rect[^>]*data-testid="card-bg"[^>]*>/ig, ''); // GH Stats bg
    cleaned = cleaned.replace(/<rect[^>]*class="statCard-bg"[^>]*>/ig, ''); // Streak bg
    cleaned = cleaned.replace(/<rect[^>]*fill="#000000"[^>]*>/ig, ''); // generic black bgs
    return cleaned;
  };

  // Architecture wrapper 1200x250 (Full width container)
  const wrapper = `
<svg width="100%" viewBox="0 0 1200 250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&amp;display=swap');
      .arc-bg { fill: #000000; }
      .section-label { font-family: 'Space Grotesk', system-ui, sans-serif; font-size: 16px; font-weight: 700; fill: #E3FF00; letter-spacing: 4px; text-transform: uppercase; }
    </style>
  </defs>
  <rect width="100%" height="100%" class="arc-bg" />
  
  <!-- Title -->
  <g transform="translate(50, 40)">
    <rect x="-10" y="-12" width="4" height="16" fill="#E3FF00" rx="2" />
    <text x="0" y="0" class="section-label">LIVE DATA ARCHITECTURE</text>
  </g>

  <!-- GitHub Stats (approx width 390) -->
  <g transform="translate(45, 60) scale(0.85)">
    <svg width="390" height="165" viewBox="0 0 390 165">
      ${cleanSvg(statsSvg)}
    </svg>
  </g>
  
  <!-- Streak Stats (approx width 495) -->
  <g transform="translate(405, 45) scale(0.85)">
    <svg width="495" height="195" viewBox="0 0 495 195">
      ${cleanSvg(streakSvg)}
    </svg>
  </g>
  
  <!-- Top Langs (approx width 300) -->
  <g transform="translate(855, 87) scale(0.85)">
    <svg width="300" height="110" viewBox="0 0 300 110">
      ${cleanSvg(langsSvg)}
    </svg>
  </g>
</svg>`;

  fs.writeFileSync(path.join(ASSETS_DIR, 'compiled-architecture.svg'), wrapper.trim());
  console.log('Saved compiled-architecture.svg');
}

async function buildActivitySection() {
  console.log('Fetching activity graph SVG...');
  const activitySvg = await fetchSvg(ACTIVITY_URL);
  
  // Activity graph is usually big, so let's give it full width
  const wrapper = `
<svg width="100%" viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&amp;display=swap');
      .bg { fill: #000000; }
      .section-label { font-family: 'Space Grotesk', system-ui, sans-serif; font-size: 16px; font-weight: 700; fill: #E3FF00; letter-spacing: 4px; text-transform: uppercase; }
    </style>
  </defs>
  <rect width="100%" height="100%" class="bg" />
  
  <g transform="translate(50, 40)">
    <rect x="-10" y="-12" width="4" height="16" fill="#E3FF00" rx="2" />
    <text x="0" y="0" class="section-label">ACTIVITY WAVE</text>
  </g>

  <g transform="translate(0, 60)">
    ${activitySvg.replace(/<\?xml.*?\?>/g, '').trim()}
  </g>
</svg>`;

  fs.writeFileSync(path.join(ASSETS_DIR, 'compiled-activity.svg'), wrapper.trim());
  console.log('Saved compiled-activity.svg');
}

async function buildMiscSection() {
  console.log('Fetching snake and quote SVGs...');
  let snakeSvg = '', quoteSvg = '';
  
  try { snakeSvg = await fetchSvg(SNAKE_URL); } catch (e) { console.log('Snake SVG missing, skipping.'); }
  try { quoteSvg = await fetchSvg(QUOTE_URL); } catch (e) { console.log('Quote SVG missing, skipping.'); }
  
  const stripXml = (svg) => svg ? svg.replace(/<\?xml.*?\?>/g, '').trim() : '';
  
  if (snakeSvg) {
    let cleanedSnake = stripXml(snakeSvg)
      .replace(/<svg[^>]*>/, '')
      .replace(/<\/svg>\s*$/, '')
      .replace(/<rect class="u u[0-9]+"[^>]*\/>/g, '');

    const snakeWrapper = `
<svg width="100%" viewBox="-16 -24 880 154" xmlns="http://www.w3.org/2000/svg">
  <rect x="-1000" y="-1000" width="3000" height="3000" fill="#000000" />
  ${cleanedSnake}
</svg>`;
    fs.writeFileSync(path.join(ASSETS_DIR, 'compiled-snake.svg'), snakeWrapper.trim());
  }



  if (quoteSvg) {
    let quoteCleaned = stripXml(quoteSvg)
      .replace(/background-color:\s*#fffefe;/gi, 'background-color: transparent;')
      .replace(/border:\s*1px[^;]+;/gi, 'border: none;')
      .replace(/color:\s*#333;/gi, 'color: #FFFFFF;')
      .replace(/color:\s*#4c71f2;/gi, 'color: #E3FF00;')
      .replace(/color:\s*#2f80ed;/gi, 'color: #A3B800;');

    const quoteWrapper = `
<svg width="100%" viewBox="0 0 1200 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="transparent" />
  <g transform="translate(250, 20)">
    <svg width="700" height="150" viewBox="0 0 700 150">
      ${quoteCleaned}
    </svg>
  </g>
</svg>`;
    fs.writeFileSync(path.join(ASSETS_DIR, 'compiled-quote.svg'), quoteWrapper.trim());
  }
}

async function run() {
  try {
    await buildArchitectureSection();
    await buildActivitySection();
    await buildMiscSection();
    console.log('SVG Compilation Complete.');
  } catch (err) {
    console.error('Error compiling SVGs:', err);
    process.exit(1);
  }
}

run();
