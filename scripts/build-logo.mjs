import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

async function main() {
  const symbolPngPath = path.resolve('public/brand/moss-ladder-symbol.png');
  const buf256 = await sharp(symbolPngPath)
    .resize(256, 256)
    .png({ compressionLevel: 9 })
    .toBuffer();
  const b64_256 = buf256.toString('base64');

  const buf128 = await sharp(symbolPngPath)
    .resize(128, 128)
    .png({ compressionLevel: 9 })
    .toBuffer();
  const b64_128 = buf128.toString('base64');

  // 1. Symbol SVG (viewBox 0 0 512 512)
  const symbolSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48" fill="none">
  <!-- Moss Ladder Organic Brand Logo -->
  <image href="data:image/png;base64,${b64_256}" x="0" y="0" width="512" height="512" preserveAspectRatio="xMidYMid meet" />
</svg>
`;
  fs.writeFileSync('public/brand/moss-ladder-symbol.svg', symbolSvg);
  fs.writeFileSync('public/favicon.svg', symbolSvg);

  // 2. Wordmark dark text
  const wordmarkDark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 40" width="240" height="40" fill="none">
  <!-- Symbol -->
  <image href="data:image/png;base64,${b64_128}" x="0" y="2" width="36" height="36" preserveAspectRatio="xMidYMid meet" />
  <!-- Text Wordmark -->
  <text x="48" y="25" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700" letter-spacing="0.14em" fill="#131615">MOSS LADDER</text>
</svg>
`;
  fs.writeFileSync('public/brand/moss-ladder-wordmark.svg', wordmarkDark);

  // 3. Wordmark light text
  const wordmarkLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 40" width="240" height="40" fill="none">
  <!-- Symbol -->
  <image href="data:image/png;base64,${b64_128}" x="0" y="2" width="36" height="36" preserveAspectRatio="xMidYMid meet" />
  <!-- Text Wordmark -->
  <text x="48" y="25" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700" letter-spacing="0.14em" fill="#F4FAF6">MOSS LADDER</text>
</svg>
`;
  fs.writeFileSync('public/brand/moss-ladder-wordmark-light.svg', wordmarkLight);

  // 4. Update og-image.svg with new symbol
  const ogImageTemplate = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630" fill="none">
  <!-- Subtle Architectural Canvas -->
  <rect width="1200" height="630" fill="#141815"/>
  
  <!-- Subtle Geometric Grid Lines -->
  <line x1="80" y1="0" x2="80" y2="630" stroke="#222B24" stroke-width="1"/>
  <line x1="1120" y1="0" x2="1120" y2="630" stroke="#222B24" stroke-width="1"/>
  <line x1="0" y1="80" x2="1200" y2="80" stroke="#222B24" stroke-width="1"/>
  <line x1="0" y1="550" x2="1200" y2="550" stroke="#222B24" stroke-width="1"/>

  <!-- Logo Symbol Container -->
  <g transform="translate(140, 130)">
    <rect width="84" height="84" rx="20" fill="#18221B" stroke="#2B3E30" stroke-width="1.5"/>
    <image href="data:image/png;base64,${b64_128}" x="8" y="8" width="68" height="68" preserveAspectRatio="xMidYMid meet" />
  </g>

  <!-- Brand Wordmark & Tagline -->
  <text x="250" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" letter-spacing="0.14em" fill="#E8EFEA">MOSS LADDER</text>
  <text x="250" y="215" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" letter-spacing="0.06em" fill="#8DA693">INDEPENDENT DIGITAL PRODUCTS</text>

  <!-- Headline -->
  <text x="140" y="320" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="700" letter-spacing="-0.02em" fill="#FFFFFF">Useful things, thoughtfully built.</text>

  <!-- Subheadline -->
  <text x="140" y="380" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="400" fill="#A7B5AA">Practical software, precision calculators, and disciplined web experiences.</text>
  <text x="140" y="414" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="400" fill="#A7B5AA">Turning complicated decisions into clear, reliable tools.</text>

  <!-- Bottom Pills -->
  <g transform="translate(140, 480)">
    <rect width="180" height="38" rx="19" fill="#1E2A20" stroke="#334838" stroke-width="1"/>
    <circle cx="20" cy="19" r="4" fill="#52B774"/>
    <text x="34" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" fill="#E0ECE3">RothProRata (Live)</text>
  </g>
  
  <g transform="translate(336, 480)">
    <rect width="180" height="38" rx="19" fill="#1C211E" stroke="#2D3630" stroke-width="1"/>
    <circle cx="20" cy="19" r="4" fill="#9BA89F"/>
    <text x="34" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" fill="#CBD4CE">Financial Planning</text>
  </g>

  <g transform="translate(532, 480)">
    <rect width="180" height="38" rx="19" fill="#1C211E" stroke="#2D3630" stroke-width="1"/>
    <circle cx="20" cy="19" r="4" fill="#9BA89F"/>
    <text x="34" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" fill="#CBD4CE">Utility Software</text>
  </g>
</svg>
`;
  fs.writeFileSync('public/brand/og-image.svg', ogImageTemplate);

  console.log('Successfully generated all brand SVG assets!');
}

main().catch(console.error);
