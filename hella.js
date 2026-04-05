<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Untuk Hella 🌹</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=IM+Fell+English:ital@0;1&family=Cinzel+Decorative:wght@400;700&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

    :root {
      --black:  #080610;
      --dark:   #100b18;
      --card:   #14101e;
      --border: #2d1535;
      --pink:   #ff2d78;
      --pink2:  #ff6fab;
      --soft:   #ffb3d1;
      --muted:  #c47a9a;
      --white:  #fff0f5;
      --glow:   rgba(255,45,120,.25);
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--black);
      color: var(--white);
      font-family: 'Cormorant Garamond', Georgia, serif;
      overflow-x: hidden;
      cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath fill='%23ff2d78' d='M10 18C4 13 1 9.5 1 6.5 1 3.4 3.4 1 6.5 1c1.7 0 3.3.9 3.5 2C10.2 1.9 11.8 1 14.5 1 17.6 1 20 3.4 20 6.5 20 9.5 16 13 10 18z'/%3E%3C/svg%3E"), auto;
    }

    ::-webkit-scrollbar { width:4px; }
    ::-webkit-scrollbar-track { background:var(--black); }
    ::-webkit-scrollbar-thumb { background:var(--pink); border-radius:99px; }

    #particles, #confetti { position:fixed; inset:0; pointer-events:none; z-index:0; }
    #confetti { z-index:200; }

    /* ── OPENING ── */
    #opening {
      position:fixed; inset:0; z-index:100;
      background: radial-gradient(ellipse at center, #1a0520 0%, #080610 70%);
      display:flex; flex-direction:column;
      align-items:center; justify-content:center; gap:1.6rem;
      transition: opacity 1.6s ease, visibility 1.6s ease;
    }
    #opening.gone { opacity:0; visibility:hidden; }
    .open-rose {
      font-size:4.5rem;
      filter:drop-shadow(0 0 24px var(--pink));
      animation: floatRose 3s ease-in-out infinite, spinIn .9s ease both;
    }
    @keyframes spinIn {
      0%   { transform:scale(0) rotate(-180deg); opacity:0; }
      100% { transform:scale(1) rotate(0);       opacity:1; }
    }
    @keyframes floatRose {
      0%,100% { transform:translateY(0) rotate(-4deg); }
      50%     { transform:translateY(-14px) rotate(4deg); }
    }
    #opening h2 {
      font-family:'Cinzel Decorative', serif;
      font-size:clamp(.9rem,3.5vw,1.3rem);
      letter-spacing:.3em; color:var(--soft);
      text-align:center; padding:0 1.5rem;
      text-shadow:0 0 30px var(--pink);
      animation: fadeUp .9s .4s ease both;
    }
    #opening p {
      font-style:italic; font-size:1rem;
      color:var(--muted);
      animation: fadeUp .9s .7s ease both;
    }
    #open-btn {
      font-family:'IM Fell English', serif;
      font-style:italic; font-size:1.15rem;
      color:var(--black);
      background:linear-gradient(135deg, var(--pink), var(--pink2));
      border:none; border-radius:2px;
      padding:1rem 2.8rem; cursor:pointer;
      box-shadow:0 0 30px var(--glow), 0 4px 24px rgba(255,45,120,.5);
      animation: fadeUp .9s 1s ease both, heartbeat 2.2s 2s ease-in-out infinite;
    }
    #open-btn:hover { filter:brightness(1.15); }
    @keyframes fadeUp {
      from { opacity:0; transform:translateY(16px); }
      to   { opacity:1; transform:none; }
    }
    @keyframes heartbeat {
      0%,100%{transform:scale(1)} 14%{transform:scale(1.08)} 28%{transform:scale(1)} 42%{transform:scale(1.05)} 56%{transform:scale(1)}
    }

    /* ── HERO ── */
    .hero {
      position:relative; z-index:1;
      min-height:100vh;
      display:flex; flex-direction:column;
      align-items:center; justify-content:center;
      text-align:center; padding:5rem 2rem 7rem;
    }
    .hero::before {
      content:''; position:absolute; inset:0; pointer-events:none;
      background:
        radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,45,120,.18) 0%, transparent 65%),
        radial-gradient(ellipse 50% 40% at 90% 95%, rgba(255,45,120,.1) 0%, transparent 60%),
        radial-gradient(ellipse 40% 30% at 5% 80%, rgba(255,111,171,.08) 0%, transparent 55%);
    }
    .hero-rose {
      font-size:4.5rem;
      filter:drop-shadow(0 0 24px var(--pink));
      animation:floatRose 4s ease-in-out infinite;
      display:block; margin-bottom:1.6rem;
    }
    .hero-eyebrow {
      font-family:'Cinzel Decorative', serif;
      font-size:clamp(.5rem,1.8vw,.72rem);
      letter-spacing:.35em; color:var(--muted); margin-bottom:.9rem;
    }
    .hero-name {
      font-family:'IM Fell English', serif;
      font-style:italic;
      font-size:clamp(4.5rem,16vw,11rem);
      line-height:.92;
      background:linear-gradient(135deg, var(--soft) 0%, var(--pink) 45%, #c2006e 100%);
      -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
      filter:drop-shadow(0 0 40px rgba(255,45,120,.4));
    }
    .hero-divider {
      width:160px; height:1px; margin:2rem auto;
      background:linear-gradient(90deg,transparent,var(--pink),transparent);
      box-shadow:0 0 12px var(--pink);
    }
    .hero-tagline {
      font-style:italic;
      font-size:clamp(1rem,2.5vw,1.35rem);
      color:var(--soft); opacity:.8;
      max-width:520px; line-height:1.85;
    }
    .hero-from {
      margin-top:1.2rem;
      font-family:'Cinzel Decorative', serif;
      font-size:.62rem; letter-spacing:.3em;
      color:var(--pink); opacity:.7;
    }
    .scroll-cue {
      margin-top:3.5rem;
      font-size:.68rem; letter-spacing:.3em; text-transform:uppercase;
      color:var(--pink);
      animation:pulse 2.2s ease-in-out infinite;
    }
    @keyframes pulse { 0%,100%{opacity:.3} 50%{opacity:1} }

    /* ── SECTIONS ── */
    .section {
      position:relative; z-index:1;
      max-width:820px; margin:0 auto; padding:5rem 2rem;
    }
    .section-label {
      font-family:'Cinzel Decorative', serif;
      font-size:.62rem; letter-spacing:.3em;
      color:var(--pink); text-align:center; margin-bottom:2.6rem;
      display:flex; align-items:center; gap:1rem;
    }
    .section-label::before, .section-label::after {
      content:''; flex:1; height:1px;
      background:linear-gradient(90deg,transparent,var(--pink),transparent);
      box-shadow:0 0 6px var(--pink);
    }

    /* ── POEM ── */
    .poem-card {
      background:var(--card); border:1px solid var(--border); border-radius:4px;
      padding:3.5rem 3rem; text-align:center;
      box-shadow:0 0 60px rgba(255,45,120,.08), inset 0 0 80px rgba(255,45,120,.03);
      position:relative;
    }
    .poem-card::before {
      content:''; position:absolute; top:0; left:0; right:0; height:2px;
      background:linear-gradient(90deg,transparent,var(--pink),transparent);
      box-shadow:0 0 16px var(--pink);
    }
    .poem-corner { position:absolute; color:var(--pink); font-size:.75rem; opacity:.4; }
    .poem-corner.tl { top:1.2rem; left:1.4rem; }
    .poem-corner.br { bottom:1.2rem; right:1.4rem; }
    .poem-card p {
      font-family:'IM Fell English', serif; font-style:italic;
      font-size:clamp(1.05rem,2.5vw,1.3rem);
      color:var(--soft); line-height:2.15;
    }
    .poem-card p + p { margin-top:1.4rem; }

    /* ── REASONS ── */
    .reasons-grid {
      display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:1.2rem;
    }
    .r-card {
      background:var(--card); border:1px solid var(--border); border-radius:4px;
      padding:2rem 1.5rem; text-align:center;
      position:relative; overflow:hidden;
      transition:transform .3s, box-shadow .3s;
    }
    .r-card::before {
      content:''; position:absolute; top:0; left:0; right:0; height:2px;
      background:linear-gradient(90deg,transparent,var(--pink),transparent);
      transform:scaleX(0); transform-origin:left; transition:transform .35s;
    }
    .r-card::after {
      content:''; position:absolute; inset:0;
      background:radial-gradient(ellipse at 50% 0%,rgba(255,45,120,.08),transparent 70%);
      opacity:0; transition:opacity .3s;
    }
    .r-card:hover { transform:translateY(-8px); box-shadow:0 20px 50px rgba(255,45,120,.15); }
    .r-card:hover::before { transform:scaleX(1); }
    .r-card:hover::after { opacity:1; }
    .r-card .icon { font-size:2rem; margin-bottom:.9rem; display:block; filter:drop-shadow(0 0 8px var(--pink)); }
    .r-card h3 {
      font-family:'Cinzel Decorative', serif; font-size:.65rem; letter-spacing:.12em;
      color:var(--pink); margin-bottom:.7rem;
    }
    .r-card p { font-size:.9rem; color:var(--muted); line-height:1.75; font-style:italic; }

    /* ── LETTER ── */
    .letter {
      background:var(--card); border:1px solid var(--border); border-radius:4px;
      padding:4rem 3.5rem; position:relative;
      box-shadow:0 0 80px rgba(255,45,120,.07), inset 0 0 100px rgba(255,45,120,.025);
    }
    .letter::before {
      content:''; position:absolute; top:0; left:0; right:0; height:2px;
      background:linear-gradient(90deg,transparent,var(--pink),transparent);
      box-shadow:0 0 20px var(--pink);
    }
    .letter-open {
      font-family:'IM Fell English', serif; font-style:italic;
      font-size:clamp(1.3rem,3.5vw,2rem);
      color:var(--pink2); margin-bottom:2.2rem;
      text-shadow:0 0 20px rgba(255,45,120,.4);
    }
    .letter p { font-size:clamp(.97rem,2.2vw,1.1rem); line-height:2.05; color:var(--soft); }
    .letter p + p { margin-top:1.4rem; }
    .letter-sign {
      margin-top:2.8rem;
      font-family:'IM Fell English', serif; font-style:italic;
      font-size:1.45rem; color:var(--pink); text-align:right;
      text-shadow:0 0 20px rgba(255,45,120,.4);
    }
    .letter-sign small {
      display:block; font-family:'Cormorant Garamond', serif;
      font-size:.78rem; letter-spacing:.2em; color:var(--muted); margin-top:.4rem;
    }
    .wax {
      width:72px; height:72px; border-radius:50%;
      background:radial-gradient(circle at 35% 35%, var(--pink2), #a0004a);
      display:flex; align-items:center; justify-content:center;
      font-size:1.9rem; margin:2.8rem auto 0;
      box-shadow:0 0 30px rgba(255,45,120,.5);
      animation:heartbeat 2.8s ease-in-out infinite;
    }

    /* ── TIMELINE ── */
    .timeline { position:relative; padding-left:2.8rem; }
    .timeline::before {
      content:''; position:absolute; left:0; top:.3rem; bottom:0; width:1px;
      background:linear-gradient(180deg,var(--pink),transparent);
      box-shadow:0 0 8px var(--pink);
    }
    .tl-item {
      margin-bottom:2.8rem; position:relative;
      opacity:0; transform:translateX(-22px);
      transition:opacity .7s ease, transform .7s ease;
    }
    .tl-item.visible { opacity:1; transform:none; }
    .tl-item::before {
      content:'✦'; position:absolute; left:calc(-2.8rem - .4rem); top:.05rem;
      color:var(--pink); font-size:.7rem; text-shadow:0 0 10px var(--pink);
    }
    .tl-moment {
      font-family:'Cinzel Decorative', serif;
      font-size:.58rem; letter-spacing:.22em; color:var(--pink); margin-bottom:.5rem;
    }
    .tl-item h3 {
      font-family:'IM Fell English', serif; font-style:italic;
      font-size:1.25rem; color:var(--soft); margin-bottom:.45rem;
    }
    .tl-item p { font-size:.93rem; color:var(--muted); line-height:1.8; }

    /* ── PROMISES ── */
    .promises { display:flex; flex-direction:column; gap:1rem; }
    .promise {
      display:flex; align-items:flex-start; gap:1.4rem;
      background:var(--card); border:1px solid var(--border);
      border-left:3px solid var(--pink); border-radius:0 4px 4px 0;
      padding:1.4rem 1.8rem;
      font-size:1rem; line-height:1.8; color:var(--soft);
      transition:transform .25s, box-shadow .25s;
    }
    .promise:hover {
      transform:translateX(8px);
      box-shadow:0 4px 24px rgba(255,45,120,.12);
    }
    .promise .num {
      font-family:'Cinzel Decorative', serif; font-size:.68rem;
      color:var(--pink); flex-shrink:0; padding-top:.3rem; letter-spacing:.1em;
      text-shadow:0 0 12px var(--pink);
    }

    /* ── FINALE ── */
    .finale {
      position:relative; z-index:1;
      text-align:center; padding:5rem 2rem 9rem;
    }
    .finale h2 {
      font-family:'IM Fell English', serif; font-style:italic;
      font-size:clamp(2rem,7vw,4rem);
      background:linear-gradient(135deg,var(--soft),var(--pink));
      -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
      filter:drop-shadow(0 0 30px rgba(255,45,120,.4));
      margin-bottom:1.2rem;
    }
    .finale p {
      font-style:italic; font-size:1.05rem; color:var(--muted);
      max-width:420px; margin:0 auto 2.8rem; line-height:1.85;
    }
    .finale-btn {
      font-family:'IM Fell English', serif; font-style:italic; font-size:1.25rem;
      color:var(--black);
      background:linear-gradient(135deg,var(--pink),#e0006a);
      border:none; border-radius:2px; padding:1.15rem 3.4rem; cursor:pointer;
      box-shadow:0 0 40px rgba(255,45,120,.5), 0 6px 30px rgba(255,45,120,.35);
      transition:transform .2s, box-shadow .2s;
      animation:heartbeat 2.5s 1s ease-in-out infinite;
    }
    .finale-btn:hover {
      transform:scale(1.07);
      box-shadow:0 0 60px rgba(255,45,120,.7), 0 10px 40px rgba(255,45,120,.45);
    }

    .sep {
      text-align:center; color:var(--pink); font-size:.85rem;
      letter-spacing:.6em; opacity:.45; margin:1rem 0;
      text-shadow:0 0 10px var(--pink);
    }

    .reveal {
      opacity:0; transform:translateY(28px);
      transition:opacity .9s ease, transform .9s ease;
    }
    .reveal.visible { opacity:1; transform:none; }
  </style>
</head>
<body>

<canvas id="particles"></canvas>
<canvas id="confetti"></canvas>

<!-- ── OPENING ── -->
<div id="opening">
  <span class="open-rose">🌹</span>
  <h2>Sebuah Pesan<br/>Untuk Hella</h2>
  <p>dari Azre, dengan sepenuh hati</p>
  <button id="open-btn" onclick="openLetter()">Buka Suratmu ✦</button>
</div>

<!-- ── HERO ── -->
<div class="hero">
  <span class="hero-rose">🌹</span>
  <div class="hero-eyebrow">Dipersembahkan dengan sepenuh hati untuk</div>
  <h1 class="hero-name">Hella</h1>
  <div class="hero-divider"></div>
  <p class="hero-tagline">
    Di antara jutaan bintang yang pernah kucari,<br/>
    kamu adalah satu-satunya yang membuatku berhenti.
  </p>
  <div class="hero-from">— dari Azre —</div>
  <div class="scroll-cue">✦ &nbsp; gulir ke bawah &nbsp; ✦</div>
</div>

<!-- ── PUISI ── -->
<div class="section reveal">
  <div class="section-label">Seuntai Puisi</div>
  <div class="poem-card">
    <span class="poem-corner tl">✦</span>
    <span class="poem-corner br">✦</span>
    <p>
      Namamu seperti melodi yang tak bisa kulepas,<br/>
      Hella — dalam desah angin, dalam diam malam.
    </p>
    <p>
      Matamu menyimpan semesta yang belum pernah kujelajah,<br/>
      dan aku ingin tersesat di sana selamanya.
    </p>
    <p>
      Setiap detik bersamamu terasa seperti puisi<br/>
      yang sudah lama kucari kata-katanya.
    </p>
    <p>
      Kamu bukan sekadar seseorang yang aku cintai —<br/>
      kamu adalah alasan aku percaya pada indahnya hidup.
    </p>
  </div>
</div>

<!-- ── ALASAN ── -->
<div class="section reveal">
  <div class="section-label">Mengapa Azre Mencintaimu</div>
  <div class="reasons-grid">
    <div class="r-card">
      <span class="icon">👁️</span>
      <h3>Matamu</h3>
      <p>Ada kehangatan di sana yang membuatku merasa seperti pulang ke rumah.</p>
    </div>
    <div class="r-card">
      <span class="icon">🌙</span>
      <h3>Malammu</h3>
      <p>Cara kamu cerita di malam hari — pelan, jujur, tak berpura-pura.</p>
    </div>
    <div class="r-card">
      <span class="icon">💬</span>
      <h3>Suaramu</h3>
      <p>Bahkan "halo" darimu bisa menenangkan semua ribut di dalam dadaku.</p>
    </div>
    <div class="r-card">
      <span class="icon">🌸</span>
      <h3>Kelembutanmu</h3>
      <p>Kamu memperlakukan dunia dengan kelembutan yang sangat langka dan indah.</p>
    </div>
    <div class="r-card">
      <span class="icon">🔥</span>
      <h3>Semangatmu</h3>
      <p>Ketika kamu bersungguh-sungguh, kamu menjadi hal paling memukau yang pernah kulihat.</p>
    </div>
    <div class="r-card">
      <span class="icon">🌿</span>
      <h3>Keutuhan Dirimu</h3>
      <p>Kamu hadir seutuhnya — tak setengah-setengah. Dan itu sangat berharga.</p>
    </div>
  </div>
</div>

<!-- ── SURAT ── -->
<div class="section reveal">
  <div class="section-label">Surat dari Azre</div>
  <div class="letter">
    <div class="letter-open">Hella yang aku cintai,</div>
    <p>
      Ada hal-hal yang selalu ingin kuucapkan tapi selalu tertahan — bukan karena
      aku tak tahu kata-katanya, tapi karena rasanya terlalu besar untuk ditampung
      dalam kalimat biasa.
    </p>
    <p>
      Kamu adalah orang yang membuatku mengerti kenapa penyair rela begadang semalaman
      hanya untuk mencari satu baris yang tepat. Karena itulah yang aku rasakan —
      seperti terus mencari kata yang cukup untuk menggambarkan betapa berartinya kamu bagiku.
    </p>
    <p>
      Aku bersyukur untuk hal-hal kecil yang mungkin kamu kira tak aku perhatikan:
      cara matamu berbinar ketika kamu cerita tentang sesuatu yang kamu sukai,
      cara kamu tertawa sampai lupa nafas, cara kamu hadir — sepenuhnya — di sampingku.
    </p>
    <p>
      Hella, aku tidak ingin hanya menjadi bagian dari harimu.
      Aku ingin menjadi seseorang yang membuat hari-harimu terasa sedikit lebih ringan,
      lebih hangat, lebih berwarna.
    </p>
    <p>
      Dan selama kamu mengizinkanku, Azre akan terus berusaha menjadi itu — setiap harinya.
    </p>
    <div class="letter-sign">
      Dengan seluruh hatiku,
      <small>— Azre, selalu untukmu ✦</small>
    </div>
    <div class="wax">🌹</div>
  </div>
</div>

<!-- ── TIMELINE ── -->
<div class="section reveal">
  <div class="section-label">Momen yang Azre Jaga</div>
  <div class="timeline" id="tl">
    <div class="tl-item">
      <div class="tl-moment">Pertama Kali</div>
      <h3>Saat Azre Pertama Melihatmu</h3>
      <p>Waktu seolah berhenti sebentar — dan aku tahu, ini bukan kebetulan biasa.</p>
    </div>
    <div class="tl-item">
      <div class="tl-moment">Yang Tak Terlupakan</div>
      <h3>Percakapan Kita yang Pertama</h3>
      <p>Azre pulang dengan senyum yang tidak bisa disembunyikan dari siapapun.</p>
    </div>
    <div class="tl-item">
      <div class="tl-moment">Momen Kecil</div>
      <h3>Ketika Hella Tertawa Lepas</h3>
      <p>Ada sesuatu di sana yang membuatku berpikir: aku mau terus ada untuk momen-momen seperti ini.</p>
    </div>
    <div class="tl-item">
      <div class="tl-moment">Hari Ini & Seterusnya</div>
      <h3>Azre di Sini, Untukmu</h3>
      <p>Aku di sini. Dan aku memilih untuk terus di sini — hari ini, besok, dan setelahnya.</p>
    </div>
  </div>
</div>

<!-- ── JANJI ── -->
<div class="section reveal">
  <div class="section-label">Janji Azre Untuk Hella</div>
  <div class="promises">
    <div class="promise"><span class="num">I</span><span>Azre berjanji untuk hadir — bukan hanya saat kamu bahagia, tapi terutama saat kamu rapuh.</span></div>
    <div class="promise"><span class="num">II</span><span>Azre berjanji untuk mendengar matamu, bukan hanya kata-katamu.</span></div>
    <div class="promise"><span class="num">III</span><span>Azre berjanji untuk tidak pernah membuatmu merasa kecil — karena kamu adalah dunia bagiku.</span></div>
    <div class="promise"><span class="num">IV</span><span>Azre berjanji untuk terus jatuh cinta padamu — hari demi hari, versi demi versi darimu.</span></div>
    <div class="promise"><span class="num">V</span><span>Nama Hella akan selalu Azre ucap dengan penuh rasa syukur — selamanya.</span></div>
  </div>
</div>

<!-- ── FINALE ── -->
<div class="finale reveal">
  <div class="sep">✦ &nbsp; ✦ &nbsp; ✦</div>
  <h2>Kamu, Hella.</h2>
  <p>Tidak ada kata yang cukup — tapi Azre akan terus mencoba mengatakannya, setiap hari.</p>
  <button class="finale-btn" onclick="bloom()">💗 Azre Menyayangimu, Hella 💗</button>
</div>

<script>
/* ── OPENING ── */
document.body.style.overflow='hidden';
function openLetter(){
  document.getElementById('opening').classList.add('gone');
  document.body.style.overflow='';
}

/* ── PARTICLE BG ── */
const pc=document.getElementById('particles');
const px=pc.getContext('2d');
let pts=[];
function resizePC(){ pc.width=innerWidth; pc.height=innerHeight; }
window.addEventListener('resize',resizePC); resizePC();
const emList=['🌹','✨','🌸','💕','💗','💖','🌟','🩷'];
for(let i=0;i<28;i++){
  pts.push({
    x:Math.random()*innerWidth,
    y:Math.random()*innerHeight,
    vx:(Math.random()-.5)*.3,
    vy:-(Math.random()*.35+.1),
    size:.8+Math.random()*1.3,
    em:emList[Math.floor(Math.random()*emList.length)],
    alpha:Math.random()*.25+.06,
    rot:Math.random()*360,
    rotV:(Math.random()-.5)*.5
  });
}
function animPt(){
  px.clearRect(0,0,pc.width,pc.height);
  pts.forEach(p=>{
    p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotV;
    if(p.y<-50) p.y=pc.height+50;
    if(p.x<-50) p.x=pc.width+50;
    if(p.x>pc.width+50) p.x=-50;
    px.save();
    px.globalAlpha=p.alpha;
    px.translate(p.x,p.y);
    px.rotate(p.rot*Math.PI/180);
    px.font=`${p.size*16}px serif`;
    px.textAlign='center'; px.textBaseline='middle';
    px.fillText(p.em,0,0);
    px.restore();
  });
  requestAnimationFrame(animPt);
}
animPt();

/* ── SCROLL REVEAL ── */
const revEls=document.querySelectorAll('.reveal');
const revIO=new IntersectionObserver(e=>{
  e.forEach(x=>{ if(x.isIntersecting) x.target.classList.add('visible'); });
},{threshold:.12});
revEls.forEach(r=>revIO.observe(r));

/* ── TIMELINE ── */
const tlIO=new IntersectionObserver(e=>{
  e.forEach(x=>{ if(x.isIntersecting) x.target.classList.add('visible'); });
},{threshold:.2});
document.querySelectorAll('.tl-item').forEach((el,i)=>{
  el.style.transitionDelay=`${i*.18}s`;
  tlIO.observe(el);
});

/* ── CONFETTI ── */
const cc=document.getElementById('confetti');
const cx=cc.getContext('2d');
let cps=[];
function resizeCC(){ cc.width=innerWidth; cc.height=innerHeight; }
window.addEventListener('resize',resizeCC); resizeCC();

function bloom(){
  const ox=innerWidth/2, oy=innerHeight*.55;
  const cols=['#ff2d78','#ff6fab','#ffb3d1','#ffffff','#c4006e','#ff9ec8','#ff4d8f'];
  for(let i=0;i<220;i++){
    const a=Math.random()*Math.PI*2, s=4+Math.random()*12;
    cps.push({
      x:ox, y:oy,
      vx:Math.cos(a)*s, vy:Math.sin(a)*s-6,
      r:2+Math.random()*5,
      col:cols[Math.floor(Math.random()*cols.length)],
      alpha:1, rot:Math.random()*360,
      rotV:(Math.random()-.5)*5,
      shape:Math.random()>.5?'circle':'rect'
    });
  }
  const ems=['🌹','💗','💕','✨','🌸','💖','🩷','💝'];
  for(let i=0;i<22;i++){
    const d=document.createElement('div');
    d.textContent=ems[Math.floor(Math.random()*ems.length)];
    const tx=(Math.random()-.5)*340, ty=-(90+Math.random()*240);
    d.style.cssText=`position:fixed;left:50%;top:55%;font-size:${1.5+Math.random()*1.6}rem;
      pointer-events:none;z-index:300;
      animation:ePop 2.2s ease forwards;
      --tx:${tx}px;--ty:${ty}px;`;
    document.body.appendChild(d);
    setTimeout(()=>d.remove(),2300);
  }
  if(!cps._on) animC();
}

const st=document.createElement('style');
st.textContent=`@keyframes ePop{
  0%{transform:translate(-50%,-50%) scale(0);opacity:1}
  70%{opacity:1}
  100%{transform:translate(calc(-50% + var(--tx)),calc(-50% + var(--ty))) scale(1.1);opacity:0}
}`;
document.head.appendChild(st);

function animC(){
  cps._on=true;
  cx.clearRect(0,0,cc.width,cc.height);
  cps=cps.filter(p=>p.alpha>.03);
  cps.forEach(p=>{
    p.x+=p.vx; p.y+=p.vy; p.vy+=.4; p.alpha-=.013; p.rot+=p.rotV;
    cx.save(); cx.globalAlpha=p.alpha; cx.fillStyle=p.col;
    cx.translate(p.x,p.y); cx.rotate(p.rot*Math.PI/180);
    if(p.shape==='circle'){ cx.beginPath(); cx.arc(0,0,p.r,0,Math.PI*2); cx.fill(); }
    else { cx.fillRect(-p.r/2,-p.r/2,p.r,p.r*1.7); }
    cx.restore();
  });
  if(cps.length) requestAnimationFrame(animC);
  else cps._on=false;
}
</script>
</body>
</html>
