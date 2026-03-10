const fs = require("fs");
const path = require("path");

const assetsDir = path.join("/tmp/test-makarenko/assets");

const premiumHero = `<svg width="100%" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&amp;family=Inter:wght@300;400;500&amp;display=swap");
      
      * { box-sizing: border-box; }
      .bg { fill: #000000; }
      
      .shape-1 {
        fill: none;
        stroke: url(#grad1);
        stroke-width: 1.5;
        opacity: 0.3;
        animation: rotateSlow 40s linear infinite;
        transform-origin: center;
      }
      
      .shape-2 {
        fill: none;
        stroke: url(#grad2);
        stroke-width: 0.5;
        opacity: 0.2;
        animation: rotateSlowReverse 50s linear infinite;
        transform-origin: center;
        stroke-dasharray: 4 12;
      }

      .title {
        font-family: "Space Grotesk", sans-serif;
        font-size: 85px;
        font-weight: 700;
        fill: #ffffff;
        letter-spacing: -3px;
        text-anchor: middle;
      }
      
      .subtitle {
        font-family: "Space Grotesk", sans-serif;
        font-size: 20px;
        font-weight: 400;
        fill: #888888;
        letter-spacing: 5px;
        text-anchor: middle;
        text-transform: uppercase;
      }

      .accent { fill: #E3FF00; }

      @keyframes rotateSlow { 100% { transform: rotate(360deg); } }
      @keyframes rotateSlowReverse { 100% { transform: rotate(-360deg); } }
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
      }
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(10px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      .animate-float { animation: float 6s ease-in-out infinite; }
      .fade-in-1 { animation: fadeIn 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }
      .fade-in-2 { animation: fadeIn 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards 0.3s; opacity: 0; }
      .fade-in-3 { animation: fadeIn 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards 0.6s; opacity: 0; }
      
      .logo-path {
        fill: none;
        stroke: #E3FF00;
        stroke-width: 2.5;
        stroke-linejoin: round;
        stroke-linecap: round;
        filter: drop-shadow(0 0 15px rgba(227, 255, 0, 0.5));
      }
    </style>

    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E3FF00"/>
      <stop offset="100%" stop-color="#000000"/>
    </linearGradient>
    <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#000000"/>
    </linearGradient>

    <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#E3FF00" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="100%" height="100%" class="bg" />
  <rect width="100%" height="100%" fill="url(#centerGlow)" />

  <g transform="translate(600, 240)">
    <g class="animate-float">
      <circle cx="0" cy="0" r="160" class="shape-2" />
      <g class="shape-1">
        <ellipse cx="0" cy="0" rx="120" ry="40" transform="rotate(30)" />
        <ellipse cx="0" cy="0" rx="120" ry="40" transform="rotate(-30)" />
        <ellipse cx="0" cy="0" rx="120" ry="40" transform="rotate(90)" />
      </g>
      <g transform="scale(1.2)">
        <polygon points="0,-25 22,-12 22,12 0,25 -22,12 -22,-12" class="logo-path" opacity="0.8"/>
        <polyline points="-22,-12 0,0 22,-12" class="logo-path" />
        <line x1="0" y1="0" x2="0" y2="25" class="logo-path" />
      </g>
    </g>
  </g>

  <g transform="translate(600, 440)">
    <text x="0" y="0" class="title fade-in-1">VLADYSLAV MAKARENKO</text>
    <text x="0" y="45" class="subtitle fade-in-2">CREATIVE DEVELOPER <tspan class="accent">✦</tspan> ARCHITECT</text>
    
    <g class="fade-in-3" transform="translate(0, 85)">
      <rect x="-80" y="-15" width="160" height="30" rx="15" fill="#111111" stroke="#333333" stroke-width="1" />
      <circle cx="-60" cy="0" r="4" fill="#E3FF00">
        <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="-48" y="4" font-family="Inter, sans-serif" font-size="11" fill="#aaaaaa" letter-spacing="1px" text-anchor="start">AVAILABLE FOR WORK</text>
    </g>
  </g>
</svg>`;

const makeSocial = (name, link) => `<svg width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&amp;display=swap");
      .bg { fill: #050505; }
      .border { fill: none; stroke: #222; stroke-width: 1; }
      .text { font-family: "Space Grotesk", sans-serif; font-size: 15px; font-weight: 500; fill: #ffffff; letter-spacing: 3px; text-anchor: middle;}
      .accent { fill: #E3FF00; }
      .container { transition: all 0.3s ease; }
      .container:hover .border { stroke: #E3FF00; }
    </style>
  </defs>
  <g class="container">
    <rect width="280" height="80" x="10" y="10" rx="40" class="bg" />
    <rect width="280" height="80" x="10" y="10" rx="40" class="border" />
    <g transform="translate(150, 50)">
      <circle cx="-60" cy="0" r="4" class="accent" />
      <text x="0" y="5" class="text">${name}</text>
    </g>
  </g>
</svg>`;

fs.writeFileSync(path.join(assetsDir, "hero-animated.svg"), premiumHero);
fs.writeFileSync(path.join(assetsDir, "link-framer.svg"), makeSocial("FRAMER", ""));
fs.writeFileSync(path.join(assetsDir, "link-linkedin.svg"), makeSocial("LINKEDIN", ""));
fs.writeFileSync(path.join(assetsDir, "link-telegram.svg"), makeSocial("TELEGRAM", ""));
fs.writeFileSync(path.join(assetsDir, "link-facebook.svg"), makeSocial("FACEBOOK", ""));

let buildScript = fs.readFileSync("/tmp/test-makarenko/scripts/build-landing.js", "utf8");

buildScript = buildScript.replace(
  \`viewBox="0 0 1200 250"\`,
  \`viewBox="0 0 1420 250"\`
).replace(
  \`<!-- GitHub Stats (approx width 495) -->
  <g transform="translate(50, 60)">
    <svg width="450" height="180" viewBox="0 0 495 195">
      \${cleanSvg(statsSvg)}
    </svg>
  </g>
  
  <!-- Streak Stats (approx width 495) -->
  <g transform="translate(500, 60)">
    <svg width="450" height="180" viewBox="0 0 495 195">
      \${cleanSvg(streakSvg)}
    </svg>
  </g>
  
  <!-- Top Langs (approx width 300) -->
  <g transform="translate(930, 60)">
    <svg width="250" height="180" viewBox="0 0 300 200">
      \${cleanSvg(langsSvg)}
    </svg>
  </g>\`,
  \`<!-- GitHub Stats (approx width 495) -->
  <g transform="translate(50, 60)">
    <svg width="480" height="180" viewBox="0 0 495 195">
      \${cleanSvg(statsSvg)}
    </svg>
  </g>
  
  <!-- Streak Stats (approx width 495) -->
  <g transform="translate(550, 60)">
    <svg width="480" height="180" viewBox="0 0 495 195">
      \${cleanSvg(streakSvg)}
    </svg>
  </g>
  
  <!-- Top Langs (approx width 300) -->
  <g transform="translate(1050, 60)">
    <svg width="300" height="180" viewBox="0 0 300 200">
      \${cleanSvg(langsSvg)}
    </svg>
  </g>\`
);

buildScript = buildScript.replace(
  \`try { graph3dSvg = await fetchSvg(GRAPH3D_URL); } catch (e) { console.log('3D Graph missing, skipping.'); }\`,
  \`// 3D Graph removed\`
);

let quoteReplacement = \`let quoteCleaned = stripXml(quoteSvg)
      .replace(/background-color:\\\\s*#fffefe;/gi, "background-color: transparent;")
      .replace(/border:\\\\s*1px[^;]+;/gi, "border: none;")
      .replace(/color:\\\\s*#333;/gi, "color: #FFFFFF;")
      .replace(/color:\\\\s*#4c71f2;/gi, "color: #E3FF00;")
      .replace(/color:\\\\s*#2f80ed;/gi, "color: #A3B800;");

    const quoteWrapper = \\\`
<svg width="100%" viewBox="0 0 1200 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#000000" />
  <g transform="translate(250, 20)">
    <svg width="700" height="150" viewBox="0 0 700 150">
      \\\${\\quoteCleaned}
    </svg>
  </g>
</svg>\\\`;
    fs.writeFileSync(path.join(ASSETS_DIR, 'compiled-quote.svg'), quoteWrapper.trim());\`;

buildScript = buildScript.replace(
  \`const quoteWrapper = \\\`
<svg width="100%" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#000000" />
  <g transform="translate(250, 30)">
    <svg width="700" height="150" viewBox="0 0 700 150">
      \\\${stripXml(quoteSvg)}
    </svg>
  </g>
</svg>\\\`;
    fs.writeFileSync(path.join(ASSETS_DIR, 'compiled-quote.svg'), quoteWrapper.trim());\`,
  quoteReplacement
);

buildScript = buildScript.replace(/if \\(graph3dSvg\\) \\{[\\s\\S]*?fs\\.writeFileSync\\(path\\.join\\(ASSETS_DIR, 'compiled-3d\\.svg'\\), graph3dWrapper\\.trim\\(\\)\\);\\n  \\}/g, \`// 3d graph wrapper removed\`);

fs.writeFileSync("/tmp/test-makarenko/scripts/build-landing.js", buildScript);

console.log("Successfully updated assets and build-landing.js");
