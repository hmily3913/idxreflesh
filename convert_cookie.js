const fs = require('fs');

const rawCookieString = `SID=g.a000wwiwlRvu0f7wnw9hW5x6Pryv5bL2uD-qNbm0qMs-FzUU-jw0Mm2Kk2FdiULTC5vN5uxWCAACgYKAa4SARASFQHGX2MiHkZ7rFtDhoOfKxtkiav_rhoVAUF8yKqwH1tGzcYMFUj0lvcQsfHv0076; __Secure-1PSID=g.a000wwiwlRvu0f7wnw9hW5x6Pryv5bL2uD-qNbm0qMs-FzUU-jw094jUpQQw47PFQ2i5zSvfxgACgYKAWESARASFQHGX2MigePQRqTOw-WUQfzsAgf9OBoVAUF8yKpXSCNqYuHXFABrReKF3cC60076; __Secure-3PSID=g.a000wwiwlRvu0f7wnw9hW5x6Pryv5bL2uD-qNbm0qMs-FzUU-jw0uJqozhu9Vm0_7pcKXT6D9QACgYKASsSARASFQHGX2MiAeaBjPtKVJYAx8K9j16LSBoVAUF8yKqI2nHY6c5kZ84ZoGQFCGyy0076; HSID=ANHUWZBAdtcm-fLQI; SSID=ApLt38FBeSxuZP4TG; APISID=1Rln7UIQiffQub0E/A7f9BhRF8VEfmSVPr; SAPISID=ksEgeS-3qQUjg_0Z/AniXMxmU2t8a8M5-Z; __Secure-1PAPISID=ksEgeS-3qQUjg_0Z/AniXMxmU2t8a8M5-Z; __Secure-3PAPISID=ksEgeS-3qQUjg_0Z/AniXMxmU2t8a8M5-Z; NID=524=gKuufN1_rrSp7ucgBVJ0eg1HzobQ-so6ryO3dRcqrinl5xHtGnHdfHeZuA_984WocPevZD-BCOnm69Pww7sXIx0it4FvOpKpxK51hDZodZFjkYZE-BpZCc_ouu1KC7NtzR-fMld8buqTIdx4KGzcg3oatVL7BGDOJs4kwovhM4Q1nJwyBl1eyhD8p7n8lHKMCWSMwnbrOBEVtF4K28IB0WPUQrMIud3gXbUS6QpwmFSE3XpfWds_sBfZS5ZJdKZpM2nFsLxY35zSj6KHnrE2Fs4hCmwiTAmV9V08uEYnKGvnjmFF_X1sK7AgwJzzY7jffO3W0BeYZddXsbBn5tA9h3vPQjdXuU5w763o0Feyf2Xq2yWga6Ca3vHPPI4mislAXAOGwjXdUPkOCmEFABLmgjPDeh_R4Lba_Jmy5K99SxlHBiiL7hp_198SPXEh7QqTWZ7VyElvnAay_quCtG2rBcV_y-7dKvTk_Y0DkcgNRjFL3n6x0o9_FumPgVvPZ1LDiF25IfPb-RE_BrAHXBcB2u-q0RODKGT5iuAkNuU5CKhNPyyjQGws9WrJcGse92Yf21AF5-YIsUglTVohegtCMINV51CJudj0UEcwKXllmqsueiYY4nQHSo3hdlPqrhV1qqAgxeziL7Xz9ZNnibGeflubSjTlAoiVSco-resQUOZBzai0OXP5-RwP_14R06G51HPE6bCFcbPa88ymWQ; _ga=GA1.1.1518557033.1747726847; __Secure-1PSIDTS=sidts-CjEBjplskGZAV4lz7goVAlL1jg6BLScSbmJ1X5W9VjARtEzI13-iniQN1cAQN5-ZknHnEAA; __Secure-3PSIDTS=sidts-CjEBjplskGZAV4lz7goVAlL1jg6BLScSbmJ1X5W9VjARtEzI13-iniQN1cAQN5-ZknHnEAA; _ga_13FEN04DFF=GS2.1.s1747726847$o1$g0$t1747727203$j0$l0$h0; SIDCC=AKEyXzU_Y2rvg-Y6u-grfJPZzexa1WezVHjLnpNIF5Bv3FLb-6ghiq7dyi-3thC1zQ4MGh8AEQ; __Secure-1PSIDCC=AKEyXzX0tHqHRoNfv5tNZDIQBJ8gm9Z0uP6zuqfzGVOgYK3YasqqznsRcEVQPmHCWm8sDVZzEw; __Secure-3PSIDCC=AKEyXzVMoqgdVksc7S75v3huRcKZz05aUJXwng-SwQ-cv4wxOAixftv_dV4nLLc-Nfpxw_Nplw`; // 👈 替换为你自己的

const domain = '.google.com'; // 👈 如果你访问的是 idx.google.com，就填 ".google.com"

const cookies = rawCookieString.split('; ').map(cookie => {
  const [name, ...valParts] = cookie.split('=');
  return {
    name: name,
    value: valParts.join('='),
    domain: domain,
    path: '/',
    httpOnly: true,
    secure: true
  };
});

fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2));
console.log('✅ cookies.json 已生成');