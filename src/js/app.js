/* =========================================================
ИКОНКИ
========================================================= */
const ICONS = {
  back:'<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M7.41 12l7.3-7.29-1.42-1.42L4.59 12l8.7 8.71 1.42-1.42z"/></svg>',
  dots:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><circle cx="5" cy="12" r="1.9"/><circle cx="12" cy="12" r="1.9"/><circle cx="19" cy="12" r="1.9"/></svg>',
  reply:'<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20.7 11.6c0 4.5-3.8 8.1-8.5 8.1-1.4 0-2.7-.3-3.9-.9L3 20.3l1.9-5.2c-.9-1.3-1.4-3-1.4-4.7C3.5 6 7.3 2.4 12 2.4s8.7 3.6 8.7 8.1z"/></svg>',
  retweet:'<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 21l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',
  like:'<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  views:'<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/></svg>',
  bookmark:'<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M5 3h14v19l-7-5-7 5z"/></svg>',
  share:'<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v13"/><path d="M7 8l5-5 5 5"/><path d="M5 13v7h14v-7"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z"/></svg>',
  pin:'<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M14 4v5l2 2v2h-3v7l-1 1-1-1v-7H8v-2l2-2V4h4z"/></svg>',
  geo:'<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 22s-8-7.5-8-13a8 8 0 1 1 16 0c0 5.5-8 13-8 13z"/><circle cx="12" cy="9" r="2.7"/></svg>',
  verified:'<svg viewBox="0 0 24 24" width="17" height="17"><path fill="#1d9bf0" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81C14.67 2.63 13.43 1.75 12 1.75s-2.67.88-3.34 2.19c-1.39-.46-2.9-.2-3.91.81s-1.27 2.52-.81 3.91C2.63 9.33 1.75 10.57 1.75 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4.5-4.5"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9z"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>',
  envelope:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="#f91880" stroke="none"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  rtgreen:'<svg viewBox="0 0 24 24" fill="none" stroke="#00ba7c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 21l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',
  replyblue:'<svg viewBox="0 0 24 24" fill="none" stroke="#1d9bf0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.7 11.6c0 4.5-3.8 8.1-8.5 8.1-1.4 0-2.7-.3-3.9-.9L3 20.3l1.9-5.2c-.9-1.3-1.4-3-1.4-4.7C3.5 6 7.3 2.4 12 2.4s8.7 3.6 8.7 8.1z"/></svg>',
  follow:'<svg viewBox="0 0 24 24" fill="none" stroke="#1d9bf0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="8" r="4"/><path d="M2 21a8 8 0 0 1 16 0"/><path d="M20 8v6M17 11h6"/></svg>'
};

/* =========================================================
СОСТОЯНИЕ
========================================================= */
let nextId = 1;
const uid = (p) => p + (nextId++);
const $ = (sel) => document.querySelector(sel);
const STORAGE_KEY = 'twitter-mockup-v5';
const STATE_VERSION = 5;
const state = {
  screens: [],
  characters: [],
  currentScreen: 0,
  showThreadLines: true
};

/* --------- Фабрики --------- */
function defaultProfile(){
  return {
    bannerColor:'#cfd9de', bannerImage:null,
    avatar:null, avatarColor:'#1d9bf0',
    name:'Имя Фамилия', handle:'nickname', verified:true,
    bio:'Пишу всякое. Иногда даже по делу.',
    location:'', joined:'',
    following:'128', followers:'12,4 тыс.'
  };
}
function defaultCharacter(over){
  return Object.assign({
    id: uid('ch'),
    name: 'Имя Фамилия',
    handle: 'nickname',
    avatar: null,
    avatarColor: '#1d9bf0',
    verified: false,
    bio: ''
  }, over || {});
}
function defaultPost(over){
  return Object.assign({
    id: uid('p'),
    avatar:null, avatarColor:'#1d9bf0',
    name:'Имя', handle:'nickname', verified:false,
    time:'2:34 PM · 5 янв. 2024',
    text:'Текст поста.',
    replyTo:'', pinned:false,
    indent:0, location:'', edited:false,
    stats:{ replies:'12', retweets:'34', likes:'256', views:'8,1 тыс.' },
    media:[],
    video:{ enabled:false, thumb:null, duration:'0:42' },
    linkPreview:{ enabled:false, image:null, domain:'example.com', title:'', description:'' },
    poll:{ enabled:false, options:[{text:'Вариант 1',pct:60},{text:'Вариант 2',pct:40}], meta:'1 234 голоса · Осталось 2 дня' },
    reaction:{ enabled:false, emoji:'❤️', count:'', onAvatar:false },
    postReactions:[],
    quote:{ enabled:false, avatar:null, avatarColor:'#7856ff', name:'', handle:'', verified:false, time:'', text:'' }
  }, over || {});
}
function defaultBanner(){
  return { id: uid('b'), enabled:true, title:'Новое упоминание', message:'Аня упомянула вас в посте', time:'сейчас' };
}
function defaultNotif(over){
  return Object.assign({
    id: uid('n'),
    type:'like',
    name:'Аня Соколова',
    handle:'anya_writes',
    verified:false,
    avatar:null,
    avatarColor:'#ff9500',
    postText:'',
    time:'2 мин'
  }, over || {});
}
function defaultDialog(over){
  return Object.assign({
    id: uid('d'),
    name:'Аня Соколова',
    handle:'anya_writes',
    verified:false,
    avatar:null,
    avatarColor:'#ff9500',
    preview:'Привет! Смотрел новую главу?',
    time:'2 мин',
    unread:2
  }, over || {});
}
function defaultDmMessage(over){
  return Object.assign({
    id: uid('dm'),
    fromMe:false,
    senderId:null,
    text:'',
    time:'',
    system:false,
    replyToId:null,
    reactions:[]
  }, over || {});
}

/* --------- Стартовый проект --------- */
function createStarterState(){
  const anya = defaultCharacter({ name:'Аня Соколова', handle:'anya_writes', avatarColor:'#ff9500', verified:true, bio:'Пишу роман. Иногда даже по делу.' });
  const boris = defaultCharacter({ name:'Борис', handle:'boris_reads', avatarColor:'#34c759', verified:false, bio:'Читаю всё, что попадётся.' });
  const vika = defaultCharacter({ name:'Вика', handle:'vika_reads', avatarColor:'#af52de', verified:false, bio:'Книжный блогер.' });
  return {
    characters: [anya, boris, vika],
    currentScreen: 0,
    showThreadLines: true,
    screens: [{
      id: uid('s'),
      label:'Лента',
      mode:'feed',
      phoneTheme:'light', stretch:false,
      navTitle:'Твит',
      activeTab:'home',
      showProfile:false,
      banners: [],
      profile: defaultProfile(),
      posts: [
        defaultPost({
          name: anya.name, handle: anya.handle, verified: anya.verified,
          avatarColor: anya.avatarColor,
          text:'Только что дописала третью главу. Кажется, герои начинают жить своей жизнью и это пугает.',
          stats:{ replies:'48', retweets:'120', likes:'2 314', views:'88,2 тыс.' },
          postReactions:[{emoji:'🔥', count:'128'},{emoji:'❤️', count:'340'},{emoji:'😂', count:'12'}]
        }),
        defaultPost({
          name: boris.name, handle: boris.handle, avatarColor: boris.avatarColor,
          time:'3:02 PM · 5 янв. 2024',
          text:'Ну наконец-то! Жду не дождусь @anya_writes',
          replyTo: anya.handle, indent:1,
          stats:{ replies:'3', retweets:'1', likes:'27', views:'1 204' }
        })
      ],
      notifications: [
        defaultNotif({ type:'like', name:anya.name, handle:anya.handle, avatarColor:anya.avatarColor, verified:true, postText:'Только что дописала третью главу…', time:'2 мин' }),
        defaultNotif({ type:'retweet', name:boris.name, handle:boris.handle, avatarColor:boris.avatarColor, postText:'Ну наконец-то! Жду не дождусь', time:'10 мин' }),
        defaultNotif({ type:'follow', name:vika.name, handle:vika.handle, avatarColor:vika.avatarColor, time:'1 ч' }),
        defaultNotif({ type:'mention', name:anya.name, handle:anya.handle, avatarColor:anya.avatarColor, verified:true, postText:'Кстати, @me, ты дочитал?', time:'3 ч' })
      ],
      dialogs: [
        defaultDialog({ name:anya.name, handle:anya.handle, avatarColor:anya.avatarColor, verified:true, preview:'Привет! Смотрел новую главу?', time:'2 мин', unread:2 }),
        defaultDialog({ name:boris.name, handle:boris.handle, avatarColor:boris.avatarColor, preview:'Отправил тебе файл', time:'1 ч', unread:0 }),
        defaultDialog({ name:vika.name, handle:vika.handle, avatarColor:vika.avatarColor, preview:'Спасибо за совет 🙌', time:'вчера', unread:0 })
      ],
      dm: {
        isGroup: false,
        groupName: '',
        participants: [
          { id: uid('dp'), name:anya.name, handle:anya.handle, avatar:null, avatarColor:anya.avatarColor, verified:true, status:'', lastSeen:'' }
        ],
        typing: false,
        typingSenderId: null,
        messages: [
          defaultDmMessage({ fromMe:false, text:'Привет! Смотрел новую главу?', time:'14:01' }),
          defaultDmMessage({ fromMe:true,  text:'Ещё нет, вечером прочитаю', time:'14:02' }),
          defaultDmMessage({ fromMe:false, text:'Ок, напиши потом, что думаешь 🙌', time:'14:03' })
        ]
      }
    }]
  };
}

/* =========================================================
СОХРАНЕНИЕ / ЗАГРУЗКА
========================================================= */
let saveTimer = null;
function setSaveStatus(status, label){
  const dot = $('#saveDot');
  const lbl = $('#saveLabel');
  dot.classList.remove('pending','error');
  if (status === 'pending') dot.classList.add('pending');
  if (status === 'error') dot.classList.add('error');
  lbl.textContent = label;
}
function scheduleSave(){
  setSaveStatus('pending', 'Сохраняю…');
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(saveNow, 600);
}
let saveNow = function(){
  saveTimer = null;
  try {
    const data = {
      version: STATE_VERSION,
      savedAt: Date.now(),
      screens: state.screens,
      characters: state.characters,
      currentScreen: state.currentScreen,
      showThreadLines: state.showThreadLines
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setSaveStatus('ok', 'Сохранено');
  } catch (e) {
    console.error('Save error:', e);
    setSaveStatus('error', 'Ошибка: ' + (e.name === 'QuotaExceededError' ? 'нет места' : 'не сохранилось'));
  }
};
function loadFromStorage(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    if (!data || !Array.isArray(data.screens) || !data.screens.length) return false;
    state.screens = data.screens;
    state.characters = Array.isArray(data.characters) ? data.characters : [];
    state.currentScreen = Math.min(data.currentScreen || 0, state.screens.length - 1);
    state.showThreadLines = data.showThreadLines !== false;
    let maxId = 0;
    const scan = (obj) => {
      if (!obj) return;
      if (Array.isArray(obj)) obj.forEach(scan);
      else if (typeof obj === 'object'){
        if (typeof obj.id === 'string'){
          const m = obj.id.match(/(\d+)$/);
          if (m) maxId = Math.max(maxId, parseInt(m[1], 10));
        }
        Object.values(obj).forEach(scan);
      }
    };
    scan(state.screens); scan(state.characters);
    nextId = maxId + 1;
    return true;
  } catch (e) {
    console.error('Load error:', e);
    return false;
  }
}

/* --------- Миграция --------- */
function migrateAll(){
  state.screens.forEach(s => {
    if (!s.dm) return;
    if (!Array.isArray(s.dm.participants)){
      s.dm.participants = [];
      if (s.dm.peer){
        s.dm.participants.push({
          id: uid('dp'),
          name: s.dm.peer.name || 'Имя',
          handle: s.dm.peer.handle || 'nickname',
          avatar: s.dm.peer.avatar || null,
          avatarColor: s.dm.peer.avatarColor || '#7856ff',
          verified: !!s.dm.peer.verified,
          status: '',
          lastSeen: ''
        });
      }
      delete s.dm.peer;
    }
    s.dm.participants.forEach(p => {
      if (typeof p.status !== 'string') p.status = '';
      if (typeof p.lastSeen !== 'string') p.lastSeen = '';
    });
    if (typeof s.dm.isGroup !== 'boolean') s.dm.isGroup = false;
    if (typeof s.dm.groupName !== 'string') s.dm.groupName = '';
    if (typeof s.dm.typingSenderId === 'undefined') s.dm.typingSenderId = null;
    if (!Array.isArray(s.dm.messages)) s.dm.messages = [];
    s.dm.messages.forEach(m => {
      if (typeof m.system !== 'boolean') m.system = false;
      if (typeof m.senderId === 'undefined' || m.senderId === null){
        m.senderId = s.dm.participants[0] ? s.dm.participants[0].id : null;
      }
      if (typeof m.replyToId === 'undefined') m.replyToId = null;
      if (!Array.isArray(m.reactions)) m.reactions = [];
    });
  });
}

/* --------- Экспорт / импорт JSON --------- */
function exportProject(){
  const data = {
    version: STATE_VERSION,
    savedAt: Date.now(),
    screens: state.screens,
    characters: state.characters,
    currentScreen: state.currentScreen,
    showThreadLines: state.showThreadLines
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type:'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'twitter-project-' + new Date().toISOString().slice(0,10) + '.json';
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
async function importProjectFromFile(file){
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    if (!data || !Array.isArray(data.screens) || !data.screens.length){
      alert('Файл повреждён или это не проект.');
      return;
    }
    if (!confirm('Заменить текущий проект загруженным из файла? Несохранённые изменения будут потеряны.')) return;
    state.screens = data.screens;
    state.characters = Array.isArray(data.characters) ? data.characters : state.characters;
    state.currentScreen = 0;
    state.showThreadLines = data.showThreadLines !== false;
    let maxId = 0;
    const scan = (o)=>{ if(!o)return; if(Array.isArray(o))o.forEach(scan); else if(typeof o==='object'){ if(typeof o.id==='string'){ const m=o.id.match(/(\d+)$/); if(m) maxId=Math.max(maxId, parseInt(m[1],10)); } Object.values(o).forEach(scan);} };
    scan(state.screens); scan(state.characters);
    nextId = maxId + 1;
    migrateAll();
    renderAll();
    saveNow();
    alert('Проект загружен!');
  } catch (e) {
    console.error(e);
    alert('Не удалось прочитать файл: ' + e.message);
  }
}
function clearProject(){
  if (!confirm('Удалить всё: экраны, посты, персонажей? Это действие нельзя отменить.')) return;
  localStorage.removeItem(STORAGE_KEY);
  const starter = createStarterState();
  state.screens = starter.screens;
  state.characters = starter.characters;
  state.currentScreen = 0;
  state.showThreadLines = true;
  migrateAll();
  renderAll();
  saveNow();
}

/* --------- Сжатие картинок --------- */
async function compressImage(file, maxSize = 1000){
  const dataUrl = await new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      let w = img.width, h = img.height;
      if (w <= maxSize && h <= maxSize){
        resolve(dataUrl);
        return;
      }
      if (w > h){ h = Math.round(h * maxSize / w); w = maxSize; }
      else { w = Math.round(w * maxSize / h); h = maxSize; }
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      c.getContext('2d').drawImage(img, 0, 0, w, h);
      const type = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
      try {
        resolve(c.toDataURL(type, 0.85));
      } catch { resolve(dataUrl); }
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

/* =========================================================
УТИЛИТЫ
========================================================= */
function escapeHtml(t){
  const d = document.createElement('div');
  d.textContent = t == null ? '' : String(t);
  return d.innerHTML;
}
function getInitials(name){
  if (!name) return '?';
  const p = String(name).trim().split(/\s+/).filter(Boolean);
  if (!p.length) return '?';
  return (p[0][0] + (p[1] ? p[1][0] : '')).toUpperCase();
}
function avatarInner(src, name){
  return src ? `<img src="${src}" alt="">` : getInitials(name);
}
function richText(text){
  const esc = escapeHtml(text);
  return esc
    .replace(/(^|[^\wА-Яа-яЁё@#/])(@[A-Za-z0-9_]+)/g, (m,p1,p2)=>`${p1}<span class="mention">${p2}</span>`)
    .replace(/(^|[^\wА-Яа-яЁё@#/])(#[A-Za-zА-Яа-яЁё0-9_]+)/g, (m,p1,p2)=>`${p1}<span class="mention">${p2}</span>`)
    .replace(/(https?:\/\/[^\s<]+)/g, m=>`<span class="mention">${m}</span>`);
}

/* =========================================================
РЕНДЕР ЧАСТЕЙ ТВИТА
========================================================= */
function renderMedia(media){
  if (!media || !media.length) return '';
  const shown = media.slice(0,4), n = shown.length;
  let inner = '';
  shown.forEach((src, i) => {
    let more = (i === 3 && media.length > 4) ? `<div class="media-more">+${media.length - 4}</div>` : '';
    inner += `<div class="media-item"><img src="${src}" alt="">${more}</div>`;
  });
  return `<div class="media-grid m${n}">${inner}</div>`;
}
function renderVideo(v){
  if (!v || !v.enabled) return '';
  return `<div class="video-block">
    ${v.thumb ? `<img src="${v.thumb}">` : ''}
    <div class="video-play">${ICONS.play}</div>
    ${v.duration ? `<div class="video-duration">${escapeHtml(v.duration)}</div>` : ''}
    <div class="video-mute">🔊</div>
  </div>`;
}
function renderLinkPreview(lp){
  if (!lp || !lp.enabled) return '';
  return `<div class="link-preview">
    ${lp.image ? `<div class="link-preview-img"><img src="${lp.image}"></div>` : ''}
    <div class="link-preview-info">
      <div class="link-preview-domain">${escapeHtml(lp.domain)}</div>
      ${lp.title ? `<div class="link-preview-title">${escapeHtml(lp.title)}</div>` : ''}
      ${lp.description ? `<div class="link-preview-desc">${escapeHtml(lp.description)}</div>` : ''}
    </div>
  </div>`;
}
function renderPoll(poll){
  if (!poll || !poll.enabled) return '';
  const max = poll.options.reduce((m,o)=>Math.max(m, Number(o.pct)||0), 0);
  const opts = poll.options.map(o => {
    const pct = Number(o.pct)||0;
    const lead = pct === max && max > 0 ? ' leading' : '';
    return `<div class="poll-opt${lead}">
      <div class="poll-fill" style="width:${Math.min(100,Math.max(0,pct))}%"></div>
      <div class="poll-row"><span>${escapeHtml(o.text)}</span><span>${pct}%</span></div>
    </div>`;
  }).join('');
  return `<div class="poll">${opts}${poll.meta ? `<div class="poll-meta">${escapeHtml(poll.meta)}</div>` : ''}</div>`;
}
function renderPostReactions(list){
  if (!list || !list.length) return '';
  return `<div class="post-reactions">${list.map(r =>
    `<span class="post-reaction"><span class="emoji">${escapeHtml(r.emoji)}</span><span>${escapeHtml(r.count)}</span></span>`
  ).join('')}</div>`;
}
function renderReaction(r){
  if (!r || !r.enabled) return '';
  return `<div class="post-reactions" style="margin-top:8px;"><span class="post-reaction blue"><span class="emoji">${escapeHtml(r.emoji||'❤️')}</span>${r.count ? ' ' + escapeHtml(r.count) : ''}</span></div>`;
}
function renderPostHTML(post, nextPost){
  const verified = post.verified ? `<span class="verified">${ICONS.verified}</span>` : '';
  const pinned = post.pinned ? `<div class="pinned-label">${ICONS.pin} Закреплённый пост</div>` : '';
  const reply = post.replyTo ? `<div class="reply-ctx">Ответ <span class="link">@${escapeHtml(post.replyTo)}</span></div>` : '';
  const sameNext = nextPost && nextPost.handle === post.handle && !nextPost.replyTo && !nextPost.indent;
  const threadLine = (state.showThreadLines && sameNext && !post.indent) ? `<div class="thread-line"></div>` : '';
  const avReaction = (post.reaction && post.reaction.enabled && post.reaction.onAvatar)
    ? `<span class="reaction">${escapeHtml(post.reaction.emoji||'❤️')}</span>` : '';
  const edited = post.edited ? `<span class="edited">· изменено</span>` : '';
  const loc = post.location ? `<div class="tweet-location">${ICONS.geo} ${escapeHtml(post.location)}</div>` : '';
  let quote = '';
  const q = post.quote;
  if (q && q.enabled){
    const qv = q.verified ? `<span class="verified">${ICONS.verified}</span>` : '';
    quote = `<div class="quote-card">
      <div class="quote-head">
        <div class="quote-av" style="background:${q.avatarColor}">${avatarInner(q.avatar, q.name)}</div>
        <span class="name">${escapeHtml(q.name)}</span>${qv}
        <span class="handle">@${escapeHtml(q.handle)}</span>
        <span class="dot">·</span><span class="time">${escapeHtml(q.time)}</span>
      </div>
      <div class="quote-text">${richText(q.text)}</div>
    </div>`;
  }
  return `<article class="tweet${post.indent ? ' indent-' + post.indent : ''}">
    ${pinned}
    <div class="tweet-body">
      <div class="tweet-av-col">
        <div class="tweet-av" style="background:${post.avatarColor}">
          ${avatarInner(post.avatar, post.name)}${avReaction}
        </div>
        ${threadLine}
      </div>
      <div class="tweet-content">
        ${post.indent ? '<div class="branch-line"></div>' : ''}
        ${reply}
        <div class="tweet-head">
          <span class="name">${escapeHtml(post.name)}</span>${verified}
          <span class="handle">@${escapeHtml(post.handle)}</span>
          <span class="dot">·</span>
          <span class="time">${escapeHtml(post.time)}</span>
          <span class="menu">${ICONS.dots}</span>
        </div>
        <div class="tweet-text">${richText(post.text)}${edited}</div>
        ${loc}
        ${renderMedia(post.media)}
        ${renderVideo(post.video)}
        ${renderLinkPreview(post.linkPreview)}
        ${renderPoll(post.poll)}
        ${quote}
        ${renderPostReactions(post.postReactions)}
        ${renderReaction(post.reaction)}
        <div class="tweet-stats">
          <div class="stats-left">
            <span class="stat">${ICONS.reply}<span>${escapeHtml(post.stats.replies)}</span></span>
            <span class="stat">${ICONS.retweet}<span>${escapeHtml(post.stats.retweets)}</span></span>
            <span class="stat">${ICONS.like}<span>${escapeHtml(post.stats.likes)}</span></span>
            <span class="stat">${ICONS.views}<span>${escapeHtml(post.stats.views)}</span></span>
          </div>
          <div class="stats-right">
            <span class="stat">${ICONS.bookmark}</span>
            <span class="stat">${ICONS.share}</span>
          </div>
        </div>
      </div>
    </div>
  </article>`;
}
function renderProfileHTML(p){
  const banner = p.bannerImage
    ? `<div class="banner"><img src="${p.bannerImage}"></div>`
    : `<div class="banner" style="background:${p.bannerColor}"></div>`;
  const verified = p.verified ? `<span class="verified">${ICONS.verified}</span>` : '';
  const meta = [];
  if (p.location) meta.push(`📍 ${escapeHtml(p.location)}`);
  if (p.joined)   meta.push(`📅 ${escapeHtml(p.joined)}`);
  return `<div class="profile-head">
    ${banner}
    <div class="profile-actions">
      <button class="btn-outline">•••</button>
      <button class="btn-dark">Подписаться</button>
    </div>
    <div class="profile-av" style="background:${p.avatarColor}">${avatarInner(p.avatar, p.name)}</div>
    <div class="profile-info">
      <div class="profile-name">${escapeHtml(p.name)} ${verified}</div>
      <div class="profile-handle">@${escapeHtml(p.handle)}</div>
      ${p.bio ? `<div class="profile-bio">${escapeHtml(p.bio)}</div>` : ''}
      ${meta.length ? `<div class="profile-meta">${meta.join('<span></span>')}</div>` : ''}
      <div class="profile-stats">
        <span><b>${escapeHtml(p.following)}</b> подписок</span>
        <span><b>${escapeHtml(p.followers)}</b> подписчиков</span>
      </div>
    </div>
  </div>`;
}
function renderBanners(screen){
  if (!screen.banners || !screen.banners.length) return '';
  const items = screen.banners.filter(b=>b.enabled).map(b => `
    <div class="notification">
      <div class="notif-icon">𝕏</div>
      <div class="notif-body">
        <div class="notif-head"><span>X</span><span>${escapeHtml(b.time||'сейчас')}</span></div>
        <div class="notif-title">${escapeHtml(b.title||'')}</div>
        <div class="notif-msg">${escapeHtml(b.message||'')}</div>
      </div>
    </div>`).join('');
  return items ? `<div class="banners-wrap">${items}</div>` : '';
}
function renderNotifFeedItem(n){
  const verified = n.verified ? `<span class="verified">${ICONS.verified}</span>` : '';
  const map = {
    like:    { icon:ICONS.heart,     color:'#f91880', label:'лайкнул(а) ваш пост' },
    retweet: { icon:ICONS.rtgreen,   color:'#00ba7c', label:'ретвитнул(а) ваш пост' },
    reply:   { icon:ICONS.replyblue, color:'#1d9bf0', label:'ответил(а) на ваш пост' },
    follow:  { icon:ICONS.follow,    color:'#1d9bf0', label:'подписался(лась) на вас' },
    mention: { icon:ICONS.replyblue, color:'#1d9bf0', label:'упомянул(а) вас' }
  };
  const info = map[n.type] || map.like;
  return `<div class="notif-feed-item">
    <div class="nf-icon" style="background:${info.color}">${info.icon}</div>
    <div class="nf-body">
      <div class="nf-text">
        <span class="nf-av" style="background:${n.avatarColor}">${avatarInner(n.avatar, n.name)}</span>
        <b>${escapeHtml(n.name)}</b>${verified} ${info.label}
      </div>
      ${n.postText ? `<div class="nf-post">${escapeHtml(n.postText)}</div>` : ''}
      <div class="nf-time">${escapeHtml(n.time||'')}</div>
    </div>
  </div>`;
}
function renderDialogItem(d){
  const verified = d.verified ? `<span class="verified">${ICONS.verified}</span>` : '';
  return `<div class="dialog-item-row">
    <div class="d-av" style="background:${d.avatarColor}">${avatarInner(d.avatar, d.name)}</div>
    <div class="d-body">
      <div class="d-head">
        <span class="name">${escapeHtml(d.name)}</span>${verified}
        <span class="handle">@${escapeHtml(d.handle)}</span>
        <span class="time">${escapeHtml(d.time||'')}</span>
      </div>
      <div class="d-preview">${escapeHtml(d.preview||'')}</div>
    </div>
    ${d.unread ? `<div class="d-unread">${escapeHtml(String(d.unread))}</div>` : ''}
  </div>`;
}

/* =========================================================
DM РЕНДЕР (одиночный и групповой)
========================================================= */
function renderDmHTML(screen){
  const dm = screen.dm;
  const parts = Array.isArray(dm.participants) ? dm.participants : [];
  const isGroup = !!dm.isGroup;
  const byId = {};
  dm.messages.forEach(m => byId[m.id] = m);
  function shortText(t, n){
    if (!t) return '';
    const s = String(t).replace(/\s+/g, ' ').trim();
    return s.length > n ? s.slice(0, n - 1) + '…' : s;
  }
  let headerAvatar, headerName, headerSubHTML;
  if (isGroup){
    const shown = parts.slice(0, 2);
    const extra = parts.length - shown.length;
    const avatars = shown.map(p =>
      `<div class="dm-ga" style="background:${p.avatarColor}">${avatarInner(p.avatar, p.name)}</div>`
    ).join('');
    const extraBadge = extra > 0 ? `<div class="dm-ga count">+${extra}</div>` : '';
    headerAvatar = `<div class="dm-group-avatars">${avatars}${extraBadge}</div>`;
    if (dm.groupName && dm.groupName.trim()){
      headerName = escapeHtml(dm.groupName);
    } else if (!parts.length){
      headerName = 'Пустой чат';
    } else {
      const firstNames = parts.map(p => (p.name || '?').split(' ')[0]);
      headerName = firstNames.length <= 3
        ? escapeHtml(firstNames.join(', '))
        : escapeHtml(firstNames.slice(0, 2).join(', ')) + ' и ещё ' + (firstNames.length - 2);
    }
    const online = parts.filter(p => p.status === 'online').length;
    if (online > 0){
      headerSubHTML = `<span class="dm-status-line online"><span class="status-dot"></span>${online} в сети</span>`;
    } else {
      const n = parts.length;
      const word = (n % 10 === 1 && n % 100 !== 11) ? 'участник'
        : ([2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100)) ? 'участника'
        : 'участников';
      headerSubHTML = n + ' ' + word;
    }
  } else {
    const peer = parts[0] || {
      name:'Имя', handle:'nickname',
      avatar:null, avatarColor:'#7856ff', verified:false
    };
    const verified = peer.verified ? `<span class="verified">${ICONS.verified}</span>` : '';
    headerAvatar = `<div class="tweet-av" style="width:32px;height:32px;background:${peer.avatarColor};font-size:12px;">${avatarInner(peer.avatar, peer.name)}</div>`;
    headerName = `${escapeHtml(peer.name)} ${verified}`;
    if (peer.status === 'online'){
      headerSubHTML = `<span class="dm-status-line online"><span class="status-dot"></span>в сети</span>`;
    } else if (peer.status === 'away'){
      headerSubHTML = `<span class="dm-status-line away"><span class="status-dot"></span>${escapeHtml(peer.lastSeen || 'был(а) недавно')}</span>`;
    } else {
      headerSubHTML = '@' + escapeHtml(peer.handle);
    }
  }
  const rows = dm.messages.map(m => {
    if (m.system){
      return `<div class="dm-system-message">${richText(m.text)}</div>`;
    }
    const isOut = !!m.fromMe;
    const sender = parts.find(p => p.id === m.senderId) || parts[0];
    const av = (isOut || !sender)
      ? ''
      : `<div class="dm-av" style="background:${sender.avatarColor}">${avatarInner(sender.avatar, sender.name)}</div>`;
    const senderName = (!isOut && isGroup && sender)
      ? `<div class="dm-sender-name">${escapeHtml(sender.name)}</div>` : '';
    let reactionsHTML = '';
    if (m.reactions && m.reactions.length){
      const pills = m.reactions.map(r => {
        const who = !r.fromMe && r.senderId
          ? parts.find(p => p.id === r.senderId) : null;
        const whoLabel = who ? `<span class="who">${escapeHtml((who.name||'').split(' ')[0])}</span>` : '';
        return `<span class="dm-reaction">${whoLabel}<span>${escapeHtml(r.emoji)}</span></span>`;
      }).join('');
      reactionsHTML = `<div class="dm-reactions-row">${pills}</div>`;
    }
    let replyHTML = '';
    if (m.replyToId && byId[m.replyToId]){
      const orig = byId[m.replyToId];
      const origSender = orig.fromMe
        ? { name: 'Вы' }
        : (parts.find(p => p.id === orig.senderId) || { name: 'Кто-то' });
      const origText = shortText(orig.text || '', 40);
      replyHTML = `
        <div class="dm-reply-quote">
          <div class="quote-author">${escapeHtml(origSender.name)}</div>
          <div class="quote-text">${escapeHtml(origText)}</div>
        </div>`;
    }
    return `
      <div class="dm-msg ${isOut ? 'outgoing' : 'incoming'}">
        ${av}
        <div class="dm-col ${isOut ? 'outgoing' : 'incoming'}">
          ${reactionsHTML}
          ${senderName}
          ${replyHTML}
          <div class="dm-bubble">${escapeHtml(m.text)}</div>
          ${m.time ? `<div class="dm-time">${escapeHtml(m.time)}</div>` : ''}
        </div>
      </div>`;
  }).join('');
  let typingHTML = '';
  if (dm.typing){
    let typingSender = isGroup
      ? (dm.typingSenderId ? parts.find(p => p.id === dm.typingSenderId) || parts[0] : parts[0])
      : parts[0];
    if (typingSender){
      typingHTML = `
        <div class="dm-msg incoming">
          <div class="dm-av" style="background:${typingSender.avatarColor}">${avatarInner(typingSender.avatar, typingSender.name)}</div>
          <div class="dm-col incoming">
            ${isGroup ? `<div class="dm-typing-name">${escapeHtml(typingSender.name)}</div>` : ''}
            <div class="typing-bubble"><span></span><span></span><span></span></div>
          </div>
        </div>`;
    }
  }
  return `
    <div class="nav-bar" style="gap:12px;">
      <span class="nav-back">${ICONS.back}</span>
      ${headerAvatar}
      <div style="flex:1; min-width:0;">
        <div style="font-size:15px; font-weight:700; display:flex; align-items:center; gap:4px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
          ${headerName}
        </div>
        <div style="font-size:12.5px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
          ${headerSubHTML}
        </div>
      </div>
    </div>
    <div class="dm-feed">${rows}${typingHTML}</div>
    <div class="dm-input-bar">
      <div class="dm-input">${isGroup ? 'Сообщение в группу…' : 'Начать сообщение…'}</div>
      <div class="dm-send">➤</div>
    </div>`;
}
function renderBottomTabs(screen){
  const tabs = [
    { key:'home', icon:ICONS.home, badge:false },
    { key:'search', icon:ICONS.search, badge:false },
    { key:'notifications', icon:ICONS.bell, badge:true },
    { key:'messages', icon:ICONS.envelope, badge:true },
    { key:'profile', icon:ICONS.user, badge:false }
  ];
  return `<div class="bottom-tabs">${tabs.map(t => `
    <div class="bt ${screen.activeTab === t.key ? 'active' : ''}">
      ${t.icon}
      ${t.badge && screen.activeTab !== t.key ? '<div class="bt-dot"></div>' : ''}
    </div>`).join('')}</div>`;
}
function buildPhoneHTML(screen, index){
  const active = index === state.currentScreen;
  const cls = 'phone ' + screen.phoneTheme + (screen.stretch ? ' stretch' : '');
  let content = '';
  if (screen.mode === 'dm'){
    content = renderDmHTML(screen);
  } else {
    content += `
      <div class="status-bar">
        <span>9:41</span>
        <span class="status-icons">▮▮▮ &nbsp; WiFi &nbsp; ▮</span>
      </div>
      <div class="nav-bar">
        <span class="nav-back">${ICONS.back}</span>
        <span class="nav-title">${escapeHtml(screen.navTitle || '')}</span>
      </div>`;
    let feed = '';
    if (screen.mode === 'feed'){
      feed = (screen.showProfile ? renderProfileHTML(screen.profile) : '')
        + screen.posts.map((p, i) => renderPostHTML(p, screen.posts[i+1])).join('');
    } else if (screen.mode === 'notifications'){
      feed = screen.notifications.map(renderNotifFeedItem).join('');
    } else if (screen.mode === 'messages'){
      feed = screen.dialogs.map(renderDialogItem).join('');
    }
    content += `<div class="feed">${feed}</div>${renderBottomTabs(screen)}`;
  }
  return `<div class="phone-wrap">
    <div class="phone-label ${active ? 'active' : ''}">${escapeHtml(screen.label)}</div>
    <div class="${cls}" data-screen-index="${index}">
      ${renderBanners(screen)}
      ${content}
    </div>
  </div>`;
}
function renderScreens(){
  const area = $('#screensArea');
  area.innerHTML = state.screens.map((s, i) => buildPhoneHTML(s, i)).join('');
  area.querySelectorAll('.phone').forEach(el => {
    el.addEventListener('click', () => {
      const i = +el.dataset.screenIndex;
      if (i !== state.currentScreen){ state.currentScreen = i; renderAll(); }
    });
  });
}
function renderTabs(){
  const c = $('#tabs');
  c.innerHTML = '';
  state.screens.forEach((s, i) => {
    const t = document.createElement('div');
    t.className = 'tab' + (i === state.currentScreen ? ' active' : '');
    t.innerHTML = `<span>${escapeHtml(s.label)}</span><span class="x" data-i="${i}">✕</span>`;
    t.addEventListener('click', e => {
      if (e.target.classList.contains('x')) return;
      state.currentScreen = i; renderAll();
    });
    t.querySelector('.x').addEventListener('click', e => {
      e.stopPropagation();
      if (state.screens.length <= 1) return;
      state.screens.splice(i, 1);
      if (state.currentScreen >= state.screens.length) state.currentScreen = state.screens.length - 1;
      renderAll();
    });
    c.appendChild(t);
  });
}

/* =========================================================
ПЕРСОНАЖИ
========================================================= */
const expandedChars = new Set();
function renderCharactersEditor(){
  const c = $('#charactersList');
  c.innerHTML = '';
  if (!state.characters.length){
    c.innerHTML = `<div style="padding:12px; text-align:center; color:var(--muted); font-size:12px;">
      Пока пусто. Нажми «+ Персонаж», чтобы добавить.
    </div>`;
    return;
  }
  state.characters.forEach((ch, idx) => {
    const card = document.createElement('div');
    card.className = 'char-item' + (expandedChars.has(ch.id) ? ' open' : '');
    card.dataset.charId = ch.id;
    card.innerHTML = `
      <div class="char-card-head">
        <div class="av-cell" style="background:${ch.avatarColor}; width:32px; height:32px; cursor:default;">
          ${avatarInner(ch.avatar, ch.name)}
        </div>
        <div class="char-info">
          <div class="char-name">${escapeHtml(ch.name)} ${ch.verified ? ICONS.verified : ''}</div>
          <div class="char-handle">@${escapeHtml(ch.handle)}</div>
        </div>
        <button class="mini danger" data-act="del">✕</button>
      </div>
      <div class="char-card-body">
        <div class="row">
          <div class="av-cell" style="background:${ch.avatarColor}">
            ${avatarInner(ch.avatar, ch.name)}
            <input type="file" accept="image/*" data-act="av">
          </div>
          <input type="text" data-act="name" value="${escapeHtml(ch.name)}" placeholder="Имя">
          <input type="color" data-act="color" value="${ch.avatarColor}">
        </div>
        <div class="grid2">
          <label>Ник<input type="text" data-act="handle" value="${escapeHtml(ch.handle)}"></label>
          <label class="chk" style="align-self:end;"><input type="checkbox" data-act="verified" ${ch.verified ? 'checked' : ''}> Галочка</label>
        </div>
        <label>Био<textarea data-act="bio">${escapeHtml(ch.bio||'')}</textarea></label>
      </div>
    `;
    c.appendChild(card);
  });
  c.querySelectorAll('.char-item').forEach(card => {
    const id = card.dataset.charId;
    const ch = state.characters.find(x => x.id === id);
    const idx = state.characters.indexOf(ch);
    card.querySelector('.char-card-head').addEventListener('click', e => {
      if (e.target.closest('button')) return;
      if (expandedChars.has(id)) expandedChars.delete(id); else expandedChars.add(id);
      card.classList.toggle('open');
    });
    card.querySelector('[data-act="del"]').addEventListener('click', e => {
      e.stopPropagation();
      if (!confirm(`Удалить персонажа «${ch.name}»? Посты, где он использован, останутся.`)) return;
      state.characters.splice(idx, 1);
      expandedChars.delete(id);
      renderCharactersEditor(); renderPostsEditor();
      scheduleSave();
    });
    function bindText(act, setter){
      const el = card.querySelector(`[data-act="${act}"]`);
      el.addEventListener('input', () => { setter(el.value); renderCharactersEditor(); renderPostsEditor(); scheduleSave(); });
    }
    bindText('name', v => ch.name = v);
    bindText('handle', v => ch.handle = v);
    bindText('bio', v => ch.bio = v);
    card.querySelector('[data-act="color"]').addEventListener('input', e => {
      ch.avatarColor = e.target.value;
      renderCharactersEditor(); renderPostsEditor(); scheduleSave();
    });
    card.querySelector('[data-act="verified"]').addEventListener('change', e => {
      ch.verified = e.target.checked;
      renderCharactersEditor(); renderPostsEditor(); scheduleSave();
    });
    card.querySelector('[data-act="av"]').addEventListener('change', async e => {
      const f = e.target.files[0]; if (!f) return;
      ch.avatar = await compressImage(f);
      renderCharactersEditor(); renderPostsEditor(); scheduleSave();
    });
  });
}

/* =========================================================
РЕДАКТОР ПОСТОВ
========================================================= */
const expanded = new Set();
function renderPostsEditor(){
  const c = $('#postsList');
  c.innerHTML = '';
  const screen = state.screens[state.currentScreen];
  if (!screen || screen.mode !== 'feed') return;
  const charOptions = state.characters.map(ch =>
    `<option value="${ch.id}">${escapeHtml(ch.name)} (@${escapeHtml(ch.handle)})</option>`
  ).join('');
  screen.posts.forEach((post, idx) => {
    const card = document.createElement('div');
    card.className = 'post-card' + (expanded.has(post.id) ? ' open' : '');
    card.dataset.postId = post.id;
    const previewText = (post.text || '').slice(0, 40);
    const indentBadge = post.indent ? `<span class="indent-badge">↳${post.indent}</span>` : '';
    const prList = (post.postReactions||[]).map((r, ri) => `
      <div class="react-row-edit">
        <input type="text" class="react-emoji" data-pr-emoji="${ri}" value="${escapeHtml(r.emoji)}">
        <input type="text" class="react-count" data-pr-count="${ri}" value="${escapeHtml(r.count)}" placeholder="128">
        <button class="mini danger" data-pr-del="${ri}">✕</button>
      </div>`).join('');
    card.innerHTML = `
      <div class="post-card-head">
        <span class="chev">▶</span>
        <span class="preview"><b>${escapeHtml(post.name)}</b> ${escapeHtml(previewText)}</span>
        ${indentBadge}
        <button class="mini danger" data-act="del">✕</button>
        <button class="mini ghost" data-act="up">↑</button>
        <button class="mini ghost" data-act="down">↓</button>
      </div>
      <div class="post-card-body">
        ${state.characters.length ? `
          <label style="margin-bottom:8px;">Применить персонажа
            <select data-act="apply-char" style="margin-top:4px;">
              <option value="">— выбрать —</option>
              ${charOptions}
            </select>
          </label>` : ''}
        <div class="row">
          <div class="av-cell" style="background:${post.avatarColor}">
            ${avatarInner(post.avatar, post.name)}
            <input type="file" accept="image/*" data-act="avatar">
          </div>
          <input type="text" data-act="name" value="${escapeHtml(post.name)}" placeholder="Имя">
          <input type="color" data-act="color" value="${post.avatarColor}">
        </div>
        <div class="grid2">
          <label>Ник<input type="text" data-act="handle" value="${escapeHtml(post.handle)}"></label>
          <label>Время<input type="text" data-act="time" value="${escapeHtml(post.time)}"></label>
        </div>
        <label class="chk"><input type="checkbox" data-act="verified" ${post.verified ? 'checked' : ''}> Галочка</label>
        <label>Ответ на ник<input type="text" data-act="replyTo" value="${escapeHtml(post.replyTo)}"></label>
        <div class="grid2">
          <label>Отступ
            <select data-act="indent">
              <option value="0" ${post.indent===0?'selected':''}>без отступа</option>
              <option value="1" ${post.indent===1?'selected':''}>↳ уровень 1</option>
              <option value="2" ${post.indent===2?'selected':''}>↳↳ уровень 2</option>
            </select>
          </label>
          <label>Локация<input type="text" data-act="location" value="${escapeHtml(post.location)}"></label>
        </div>
        <label class="chk"><input type="checkbox" data-act="pinned" ${post.pinned ? 'checked' : ''}> Закреплённый</label>
        <label class="chk"><input type="checkbox" data-act="edited" ${post.edited ? 'checked' : ''}> Метка «изменено»</label>
        <label>Текст<textarea data-act="text">${escapeHtml(post.text)}</textarea></label>
        <div class="section" style="border-top:none; margin-top:6px; padding-top:6px;">
          <h2 style="margin-bottom:4px;">Картинки</h2>
          <input type="file" accept="image/*" multiple data-act="media-add">
          <div class="media-thumbs">
            ${post.media.map((src, mi) => `
              <div class="media-thumb">
                <img src="${src}">
                <button class="rm" data-media-idx="${mi}">✕</button>
              </div>`).join('')}
          </div>
        </div>
        <div class="section" style="border-top:none; margin-top:6px; padding-top:6px;">
          <h2 style="margin-bottom:4px;">Реакции-эмодзи (Blue)</h2>
          <div>${prList}</div>
          <button class="ghost" data-act="pr-add" style="margin-top:2px;">+ Реакция</button>
        </div>
        <div class="grid4" style="margin-top:8px;">
          <label>Ответы<input type="text" data-act="s_replies" value="${escapeHtml(post.stats.replies)}"></label>
          <label>Репосты<input type="text" data-act="s_retweets" value="${escapeHtml(post.stats.retweets)}"></label>
          <label>Лайки<input type="text" data-act="s_likes" value="${escapeHtml(post.stats.likes)}"></label>
          <label>Просмотры<input type="text" data-act="s_views" value="${escapeHtml(post.stats.views)}"></label>
        </div>
      </div>
    `;
    c.appendChild(card);
  });
  c.querySelectorAll('.post-card').forEach(card => {
    const id = card.dataset.postId;
    const post = screen.posts.find(p => p.id === id);
    const idx = screen.posts.indexOf(post);
    card.querySelector('.post-card-head').addEventListener('click', e => {
      if (e.target.closest('button')) return;
      if (expanded.has(id)) expanded.delete(id); else expanded.add(id);
      card.classList.toggle('open');
    });
    card.querySelector('[data-act="del"]').addEventListener('click', () => {
      screen.posts.splice(idx, 1); expanded.delete(id);
      renderPostsEditor(); renderScreens(); scheduleSave();
    });
    card.querySelector('[data-act="up"]').addEventListener('click', () => {
      if (idx > 0){
        [screen.posts[idx-1], screen.posts[idx]] = [screen.posts[idx], screen.posts[idx-1]];
        renderPostsEditor(); renderScreens(); scheduleSave();
      }
    });
    card.querySelector('[data-act="down"]').addEventListener('click', () => {
      if (idx < screen.posts.length - 1){
        [screen.posts[idx+1], screen.posts[idx]] = [screen.posts[idx], screen.posts[idx+1]];
        renderPostsEditor(); renderScreens(); scheduleSave();
      }
    });
    const applySel = card.querySelector('[data-act="apply-char"]');
    if (applySel) applySel.addEventListener('change', e => {
      const ch = state.characters.find(x => x.id === e.target.value);
      if (!ch) return;
      post.name = ch.name;
      post.handle = ch.handle;
      post.avatar = ch.avatar;
      post.avatarColor = ch.avatarColor;
      post.verified = ch.verified;
      renderPostsEditor(); renderScreens(); scheduleSave();
    });
    function bindText(act, setter){
      const el = card.querySelector(`[data-act="${act}"]`);
      if (!el) return;
      el.addEventListener('input', () => {
        setter(el.value); renderScreens(); scheduleSave();
        if (act === 'text' || act === 'name'){
          const prev = card.querySelector('.preview');
          if (prev) prev.innerHTML = `<b>${escapeHtml(post.name)}</b> ${escapeHtml((post.text||'').slice(0,40))}`;
        }
      });
    }
    bindText('name', v => post.name = v);
    bindText('handle', v => post.handle = v);
    bindText('time', v => post.time = v);
    bindText('replyTo', v => post.replyTo = v);
    bindText('location', v => post.location = v);
    bindText('text', v => post.text = v);
    bindText('s_replies', v => post.stats.replies = v);
    bindText('s_retweets', v => post.stats.retweets = v);
    bindText('s_likes', v => post.stats.likes = v);
    bindText('s_views', v => post.stats.views = v);
    card.querySelector('[data-act="indent"]').addEventListener('change', e => {
      post.indent = Number(e.target.value)||0; renderScreens(); scheduleSave();
    });
    card.querySelector('[data-act="verified"]').addEventListener('change', e => { post.verified = e.target.checked; renderScreens(); scheduleSave(); });
    card.querySelector('[data-act="pinned"]').addEventListener('change', e => { post.pinned = e.target.checked; renderScreens(); scheduleSave(); });
    card.querySelector('[data-act="edited"]').addEventListener('change', e => { post.edited = e.target.checked; renderScreens(); scheduleSave(); });
    card.querySelector('[data-act="color"]').addEventListener('input', e => {
      post.avatarColor = e.target.value;
      card.querySelector('.av-cell').style.background = e.target.value;
      renderScreens(); scheduleSave();
    });
    card.querySelector('[data-act="avatar"]').addEventListener('change', async e => {
      const f = e.target.files[0]; if (!f) return;
      post.avatar = await compressImage(f);
      renderPostsEditor(); renderScreens(); scheduleSave();
    });
    card.querySelector('[data-act="media-add"]').addEventListener('change', async e => {
      const files = Array.from(e.target.files||[]).slice(0, 4 - post.media.length);
      for (const f of files) post.media.push(await compressImage(f));
      renderPostsEditor(); renderScreens(); scheduleSave();
    });
    card.querySelectorAll('[data-media-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        post.media.splice(+btn.dataset.mediaIdx, 1);
        renderPostsEditor(); renderScreens(); scheduleSave();
      });
    });
    card.querySelectorAll('[data-pr-emoji]').forEach(inp => {
      inp.addEventListener('input', e => {
        post.postReactions[+e.target.dataset.prEmoji].emoji = e.target.value;
        renderScreens(); scheduleSave();
      });
    });
    card.querySelectorAll('[data-pr-count]').forEach(inp => {
      inp.addEventListener('input', e => {
        post.postReactions[+e.target.dataset.prCount].count = e.target.value;
        renderScreens(); scheduleSave();
      });
    });
    card.querySelectorAll('[data-pr-del]').forEach(btn => {
      btn.addEventListener('click', () => {
        post.postReactions.splice(+btn.dataset.prDel, 1);
        renderPostsEditor(); renderScreens(); scheduleSave();
      });
    });
    card.querySelector('[data-act="pr-add"]').addEventListener('click', () => {
      post.postReactions.push({ emoji:'🔥', count:'1' });
      renderPostsEditor(); renderScreens(); scheduleSave();
    });
  });
}

/* =========================================================
РЕДАКТОР УВЕДОМЛЕНИЙ
========================================================= */
function renderNotifsEditor(){
  const c = $('#notifsList');
  c.innerHTML = '';
  const screen = state.screens[state.currentScreen];
  if (!screen || screen.mode !== 'notifications') return;
  screen.notifications.forEach((n, idx) => {
    const item = document.createElement('div');
    item.className = 'notif-item';
    item.innerHTML = `
      <div class="ntype">${escapeHtml(n.type)}</div>
      <div class="row">
        <div class="av-cell" style="background:${n.avatarColor}">
          ${avatarInner(n.avatar, n.name)}
          <input type="file" accept="image/*" data-index="${idx}" data-act="n-av">
        </div>
        <input type="text" data-index="${idx}" data-act="n-name" value="${escapeHtml(n.name)}">
        <input type="color" data-index="${idx}" data-act="n-color" value="${n.avatarColor}">
        <button class="mini danger" data-index="${idx}" data-act="n-del">✕</button>
      </div>
      <div class="grid2">
        <label>Тип
          <select data-index="${idx}" data-act="n-type">
            <option value="like" ${n.type==='like'?'selected':''}>❤️ Лайк</option>
            <option value="retweet" ${n.type==='retweet'?'selected':''}>🔁 Ретвит</option>
            <option value="reply" ${n.type==='reply'?'selected':''}>💬 Ответ</option>
            <option value="follow" ${n.type==='follow'?'selected':''}>👤 Подписка</option>
            <option value="mention" ${n.type==='mention'?'selected':''}>@ Упоминание</option>
          </select>
        </label>
        <label>Ник<input type="text" data-index="${idx}" data-act="n-handle" value="${escapeHtml(n.handle)}"></label>
      </div>
      <div class="grid2">
        <label>Время<input type="text" data-index="${idx}" data-act="n-time" value="${escapeHtml(n.time)}"></label>
        <label class="chk" style="align-self:end;"><input type="checkbox" data-index="${idx}" data-act="n-verified" ${n.verified?'checked':''}> Галочка</label>
      </div>
      <label>Текст поста<input type="text" data-index="${idx}" data-act="n-post" value="${escapeHtml(n.postText)}"></label>
    `;
    c.appendChild(item);
  });
  c.querySelectorAll('[data-act]').forEach(el => {
    const idx = +el.dataset.index;
    const n = screen.notifications[idx];
    const act = el.dataset.act;
    if (act === 'n-del'){
      el.addEventListener('click', () => {
        screen.notifications.splice(idx, 1);
        renderNotifsEditor(); renderScreens(); scheduleSave();
      });
    } else if (act === 'n-av'){
      el.addEventListener('change', async e => {
        const f = e.target.files[0]; if (!f) return;
        n.avatar = await compressImage(f);
        renderNotifsEditor(); renderScreens(); scheduleSave();
      });
    } else if (act === 'n-verified'){
      el.addEventListener('change', e => { n.verified = e.target.checked; renderScreens(); scheduleSave(); });
    } else if (act === 'n-color'){
      el.addEventListener('input', e => { n.avatarColor = e.target.value; renderScreens(); scheduleSave(); });
    } else if (act === 'n-type'){
      el.addEventListener('change', e => { n.type = e.target.value; renderScreens(); scheduleSave(); });
    } else {
      el.addEventListener('input', e => {
        if (act === 'n-name') n.name = e.target.value;
        else if (act === 'n-handle') n.handle = e.target.value;
        else if (act === 'n-time') n.time = e.target.value;
        else if (act === 'n-post') n.postText = e.target.value;
        renderScreens(); scheduleSave();
      });
    }
  });
}

/* =========================================================
РЕДАКТОР ДИАЛОГОВ
========================================================= */
function renderDialogsEditor(){
  const c = $('#dialogsList');
  c.innerHTML = '';
  const screen = state.screens[state.currentScreen];
  if (!screen || screen.mode !== 'messages') return;
  screen.dialogs.forEach((d, idx) => {
    const item = document.createElement('div');
    item.className = 'dialog-item';
    item.innerHTML = `
      <div class="row">
        <div class="av-cell" style="background:${d.avatarColor}">
          ${avatarInner(d.avatar, d.name)}
          <input type="file" accept="image/*" data-index="${idx}" data-act="d-av">
        </div>
        <input type="text" data-index="${idx}" data-act="d-name" value="${escapeHtml(d.name)}">
        <input type="color" data-index="${idx}" data-act="d-color" value="${d.avatarColor}">
        <button class="mini danger" data-index="${idx}" data-act="d-del">✕</button>
      </div>
      <div class="grid2">
        <label>Ник<input type="text" data-index="${idx}" data-act="d-handle" value="${escapeHtml(d.handle)}"></label>
        <label>Время<input type="text" data-index="${idx}" data-act="d-time" value="${escapeHtml(d.time)}"></label>
      </div>
      <div class="grid2">
        <label>Непрочитанных<input type="text" data-index="${idx}" data-act="d-unread" value="${escapeHtml(String(d.unread||0))}"></label>
        <label class="chk" style="align-self:end;"><input type="checkbox" data-index="${idx}" data-act="d-verified" ${d.verified?'checked':''}> Галочка</label>
      </div>
      <label>Превью<input type="text" data-index="${idx}" data-act="d-preview" value="${escapeHtml(d.preview)}"></label>
    `;
    c.appendChild(item);
  });
  c.querySelectorAll('[data-act]').forEach(el => {
    const idx = +el.dataset.index;
    const d = screen.dialogs[idx];
    const act = el.dataset.act;
    if (act === 'd-del'){
      el.addEventListener('click', () => {
        screen.dialogs.splice(idx, 1);
        renderDialogsEditor(); renderScreens(); scheduleSave();
      });
    } else if (act === 'd-av'){
      el.addEventListener('change', async e => {
        const f = e.target.files[0]; if (!f) return;
        d.avatar = await compressImage(f);
        renderDialogsEditor(); renderScreens(); scheduleSave();
      });
    } else if (act === 'd-verified'){
      el.addEventListener('change', e => { d.verified = e.target.checked; renderScreens(); scheduleSave(); });
    } else if (act === 'd-color'){
      el.addEventListener('input', e => { d.avatarColor = e.target.value; renderScreens(); scheduleSave(); });
    } else {
      el.addEventListener('input', e => {
        if (act === 'd-name') d.name = e.target.value;
        else if (act === 'd-handle') d.handle = e.target.value;
        else if (act === 'd-time') d.time = e.target.value;
        else if (act === 'd-preview') d.preview = e.target.value;
        else if (act === 'd-unread') d.unread = Number(e.target.value)||0;
        renderScreens(); scheduleSave();
      });
    }
  });
}

/* =========================================================
РЕДАКТОР DM
========================================================= */
function renderDmEditor(){
  const c = $('#dmMessagesList');
  c.innerHTML = '';
  const screen = state.screens[state.currentScreen];
  if (!screen || screen.mode !== 'dm') return;
  const dm = screen.dm;
  const parts = dm.participants || [];
  const isGroup = !!dm.isGroup;
  const byId = {};
  dm.messages.forEach(m => byId[m.id] = m);
  
  // Секция участников группы
  const participantsBox = $('#dmParticipantsList');
  if (participantsBox){
    participantsBox.innerHTML = '';
    if (!parts.length){
      participantsBox.innerHTML = '<div style="font-size:12px;color:var(--muted);padding:6px 0;">Участников пока нет — нажми «+ Участник».</div>';
    } else {
      parts.forEach((p, i) => {
        const row = document.createElement('div');
        row.style.marginBottom = '8px';
        row.innerHTML = `
          <div class="row" style="margin-bottom:4px;">
            <div class="av-cell" style="background:${p.avatarColor}">
              ${avatarInner(p.avatar, p.name)}
              <input type="file" accept="image/*" data-i="${i}" data-act="p-av">
            </div>
            <input type="text" data-i="${i}" data-act="p-name" value="${escapeHtml(p.name)}">
            <input type="color" data-i="${i}" data-act="p-color" value="${p.avatarColor}">
            <button class="mini danger" data-i="${i}" data-act="p-del" title="Убрать">✕</button>
          </div>
          <div class="dm-part-status-row">
            <select data-i="${i}" data-act="p-status">
              <option value="" ${!p.status ? 'selected' : ''}>— статус —</option>
              <option value="online" ${p.status === 'online' ? 'selected' : ''}>🟢 В сети</option>
              <option value="away" ${p.status === 'away' ? 'selected' : ''}>🟡 Был(а) недавно</option>
            </select>
            <input type="text" data-i="${i}" data-act="p-lastseen"
              value="${escapeHtml(p.lastSeen || '')}"
              placeholder="был(а) 5 мин назад"
              ${p.status === 'away' ? '' : 'disabled'}>
          </div>
        `;
        participantsBox.appendChild(row);
      });
      participantsBox.querySelectorAll('[data-act]').forEach(el => {
        const i = +el.dataset.i;
        const p = parts[i];
        const act = el.dataset.act;
        if (act === 'p-del'){
          el.addEventListener('click', () => {
            if (parts.length <= 1) return;
            const removedId = p.id;
            parts.splice(i, 1);
            const fallback = parts[0] ? parts[0].id : null;
            dm.messages.forEach(m => {
              if (m.senderId === removedId) m.senderId = fallback;
              if (m.replyToId && !byId[m.replyToId]) m.replyToId = null;
              m.reactions = (m.reactions || []).filter(r => r.senderId !== removedId);
            });
            renderDmEditor(); renderScreens(); scheduleSave();
          });
        } else if (act === 'p-av'){
          el.addEventListener('change', async e => {
            const f = e.target.files[0]; if (!f) return;
            p.avatar = await compressImage(f);
            renderDmEditor(); renderScreens(); scheduleSave();
          });
        } else if (act === 'p-color'){
          el.addEventListener('input', e => { p.avatarColor = e.target.value; renderScreens(); scheduleSave(); });
        } else if (act === 'p-name'){
          el.addEventListener('input', e => { p.name = e.target.value; renderScreens(); scheduleSave(); });
        } else if (act === 'p-status'){
          el.addEventListener('change', e => {
            p.status = e.target.value;
            if (p.status !== 'away') p.lastSeen = '';
            renderDmEditor(); renderScreens(); scheduleSave();
          });
        } else if (act === 'p-lastseen'){
          el.addEventListener('input', e => { p.lastSeen = e.target.value; renderScreens(); scheduleSave(); });
        }
      });
    }
  }
  
  // Секции видимости
  const peerSection = $('#dmPeerSection');
  const groupSection = $('#dmGroupSection');
  const groupNameLabel = $('#dmGroupNameLabel');
  if (peerSection) peerSection.style.display = isGroup ? 'none' : '';
  if (groupSection) groupSection.style.display = isGroup ? '' : 'none';
  if (groupNameLabel) groupNameLabel.style.display = isGroup ? '' : 'none';
  
  // Одиночный собеседник
  if (!isGroup){
    const peer = parts[0];
    if (peer){
      const nEl = $('#dmPeerName'); if (nEl) nEl.value = peer.name;
      const hEl = $('#dmPeerHandle'); if (hEl) hEl.value = peer.handle;
      const cEl = $('#dmPeerColor'); if (cEl) cEl.value = peer.avatarColor;
      const vEl = $('#dmPeerVerified'); if (vEl) vEl.checked = !!peer.verified;
      const cell = $('#dmPeerAvCell');
      if (cell){
        cell.style.background = peer.avatarColor;
        cell.innerHTML = avatarInner(peer.avatar, peer.name) + '<input type="file" accept="image/*" id="dmPeerAvInput">';
        cell.querySelector('input').addEventListener('change', async e => {
          const f = e.target.files[0]; if (!f) return;
          peer.avatar = await compressImage(f);
          renderDmEditor(); renderScreens(); scheduleSave();
        });
      }
      const peerStatusHost = document.getElementById('dmPeerStatusHost');
      if (peerStatusHost){
        peerStatusHost.innerHTML = `
          <div class="grid2">
            <label>Статус
              <select id="dmPeerStatus">
                <option value="" ${!peer.status ? 'selected' : ''}>— не показывать —</option>
                <option value="online" ${peer.status === 'online' ? 'selected' : ''}>🟢 В сети</option>
                <option value="away" ${peer.status === 'away' ? 'selected' : ''}>🟡 Был(а) недавно</option>
              </select>
            </label>
            <label>Текст статуса
              <input type="text" id="dmPeerLastSeen"
                value="${escapeHtml(peer.lastSeen || '')}"
                placeholder="был(а) 5 мин назад"
                ${peer.status === 'away' ? '' : 'disabled'}>
            </label>
          </div>
        `;
        document.getElementById('dmPeerStatus').addEventListener('change', e => {
          peer.status = e.target.value;
          if (peer.status !== 'away') peer.lastSeen = '';
          renderDmEditor(); renderScreens(); scheduleSave();
        });
        document.getElementById('dmPeerLastSeen').addEventListener('input', e => {
          peer.lastSeen = e.target.value;
          renderScreens(); scheduleSave();
        });
      }
    }
  }
  
  // Общие переключатели
  const gt = $('#dmGroupToggle'); if (gt) gt.checked = isGroup;
  const gn = $('#dmGroupName'); if (gn) gn.value = dm.groupName || '';
  const tt = $('#dmTyping'); if (tt) tt.checked = !!dm.typing;
  const tsl = $('#dmTypingSenderLabel');
  const tsSel = $('#dmTypingSender');
  if (tsl && tsSel){
    if (isGroup && dm.typing){
      tsl.style.display = '';
      tsSel.innerHTML = parts.map(p =>
        `<option value="${p.id}" ${p.id === dm.typingSenderId ? 'selected' : ''}>${escapeHtml(p.name)}</option>`
      ).join('');
    } else {
      tsl.style.display = 'none';
    }
  }
  
  // Сообщения
  const participantOptions = parts.map(p =>
    `<option value="${p.id}">${escapeHtml(p.name)}</option>`
  ).join('');
  dm.messages.forEach((m, idx) => {
    const item = document.createElement('div');
    item.className = 'dm-item';
    const senderSelect = (isGroup && !m.system && !m.fromMe)
      ? `<label>От кого
          <select data-index="${idx}" data-act="dm-sender">${participantOptions}</select>
        </label>` : '';
    const replyCandidates = dm.messages.slice(0, idx);
    const replyPickerHTML = `
      <details style="margin-top:6px;">
        <summary style="cursor:pointer; font-size:12.5px; color:var(--accent);">
          ${m.replyToId ? '↩ Ответ на сообщение (нажми, чтобы изменить)' : '↩ Ответить на сообщение'}
        </summary>
        <div class="dm-reply-picker">
          <div class="dm-reply-picker-item ${!m.replyToId ? 'selected' : ''}"
            data-reply-id="">
            <span class="rp-author">—</span>
            <span class="rp-text">без ответа</span>
          </div>
          ${replyCandidates.map((x) => {
            const origIdx = dm.messages.indexOf(x);
            const isOut = x.fromMe;
            const author = x.system ? 'система'
              : isOut ? 'Вы'
              : (parts.find(p => p.id === x.senderId) || {name:'?'}).name;
            const preview = x.text
              ? (x.text.length > 45 ? x.text.slice(0,44) + '…' : x.text)
              : '(пусто)';
            return `<div class="dm-reply-picker-item ${m.replyToId === x.id ? 'selected' : ''}"
              data-reply-id="${x.id}">
              <span class="rp-author">#${origIdx+1} ${escapeHtml(author)}</span>
              <span class="rp-text">${escapeHtml(preview)}</span>
            </div>`;
          }).join('')}
        </div>
      </details>`;
    const reactionsList = (m.reactions || []).map((r, ri) => {
      const who = r.fromMe
        ? 'Вы'
        : (parts.find(p => p.id === r.senderId) || { name:'?' }).name;
      return `<span class="reaction-pill">${escapeHtml(r.emoji)} <span class="who">${escapeHtml(who)}</span>
        <button data-rm-react="${ri}">✕</button></span>`;
    }).join('');
    const quickEmojis = ['❤️','👍','😂','😮','😢','🔥'];
    const quickReactHTML = quickEmojis.map(e =>
      `<button data-quick-emoji="${e}">${e}</button>`
    ).join('');
    const reactionsHTML = `
      <div style="margin-top:6px;">
        <div style="font-size:12px; color:var(--muted); margin-bottom:4px;">Реакции</div>
        <div class="reactions-bar">${reactionsList || '<span style="font-size:12px;color:var(--muted);">Нет</span>'}</div>
        <div class="quick-react" style="margin-top:6px;">
          ${quickReactHTML}
          <button data-act="react-custom" style="font-size:13px; padding:4px 8px;">Другая…</button>
        </div>
      </div>`;
    item.innerHTML = `
      <div class="row wrap">
        <label class="chk" style="margin:0;">
          <input type="checkbox" data-index="${idx}" data-act="dm-system" ${m.system ? 'checked' : ''}> Системное
        </label>
        ${!m.system ? `
          <label class="chk" style="margin:0;">
            <input type="checkbox" data-index="${idx}" data-act="dm-fromme" ${m.fromMe ? 'checked' : ''}> От меня
          </label>
        ` : ''}
        <input type="text" data-index="${idx}" data-act="dm-time" value="${escapeHtml(m.time)}" placeholder="14:01" style="max-width:80px;">
        <button class="mini danger" data-index="${idx}" data-act="dm-del">✕</button>
      </div>
      ${senderSelect}
      <label>Текст<textarea data-index="${idx}" data-act="dm-text">${escapeHtml(m.text)}</textarea></label>
      ${!m.system ? replyPickerHTML : ''}
      ${!m.system ? reactionsHTML : ''}
    `;
    if (isGroup && !m.system && !m.fromMe){
      const sel = item.querySelector('[data-act="dm-sender"]');
      if (sel && m.senderId) sel.value = m.senderId;
    }
    c.appendChild(item);
  });
  c.querySelectorAll('.dm-item').forEach((item, idx) => {
    const m = dm.messages[idx];
    if (!m) return;
    item.querySelectorAll('[data-act]').forEach(el => {
      const act = el.dataset.act;
      if (act === 'dm-del'){
        el.addEventListener('click', () => {
          const delId = m.id;
          dm.messages.splice(idx, 1);
          dm.messages.forEach(x => { if (x.replyToId === delId) x.replyToId = null; });
          renderDmEditor(); renderScreens(); scheduleSave();
        });
      } else if (act === 'dm-fromme'){
        el.addEventListener('change', e => {
          m.fromMe = e.target.checked;
          if (m.fromMe && !m.senderId && parts[0]) m.senderId = parts[0].id;
          renderDmEditor(); renderScreens(); scheduleSave();
        });
      } else if (act === 'dm-system'){
        el.addEventListener('change', e => {
          m.system = e.target.checked;
          if (m.system) m.fromMe = false;
          renderDmEditor(); renderScreens(); scheduleSave();
        });
      } else if (act === 'dm-sender'){
        el.addEventListener('change', e => { m.senderId = e.target.value; renderScreens(); scheduleSave(); });
      } else if (act === 'dm-time'){
        el.addEventListener('input', e => { m.time = e.target.value; renderScreens(); scheduleSave(); });
      } else if (act === 'dm-text'){
        el.addEventListener('input', e => { m.text = e.target.value; renderScreens(); scheduleSave(); });
      }
    });
    item.querySelectorAll('[data-reply-id]').forEach(pickerEl => {
      pickerEl.addEventListener('click', () => {
        const id = pickerEl.dataset.replyId;
        m.replyToId = id || null;
        renderDmEditor(); renderScreens(); scheduleSave();
      });
    });
    item.querySelectorAll('[data-quick-emoji]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!m.reactions) m.reactions = [];
        m.reactions.push({ emoji: btn.dataset.quickEmoji, fromMe: true, senderId: null });
        renderDmEditor(); renderScreens(); scheduleSave();
      });
    });
    const custom = item.querySelector('[data-act="react-custom"]');
    if (custom) custom.addEventListener('click', () => {
      const emoji = prompt('Введи эмодзи для реакции:', '😮');
      if (emoji && emoji.trim()){
        if (!m.reactions) m.reactions = [];
        m.reactions.push({ emoji: emoji.trim().slice(0, 4), fromMe: true, senderId: null });
        renderDmEditor(); renderScreens(); scheduleSave();
      }
    });
    item.querySelectorAll('[data-rm-react]').forEach(btn => {
      btn.addEventListener('click', () => {
        m.reactions.splice(+btn.dataset.rmReact, 1);
        renderDmEditor(); renderScreens(); scheduleSave();
      });
    });
  });
}

/* =========================================================
РЕДАКТОР БАННЕРОВ
========================================================= */
function renderBannersEditor(){
  const c = $('#bannersList');
  c.innerHTML = '';
  const screen = state.screens[state.currentScreen];
  if (!screen) return;
  screen.banners.forEach((b, idx) => {
    const item = document.createElement('div');
    item.className = 'row wrap';
    item.innerHTML = `
      <label class="chk" style="margin:0;"><input type="checkbox" data-index="${idx}" data-act="b-en" ${b.enabled?'checked':''}> Вкл</label>
      <input type="text" data-index="${idx}" data-act="b-title" value="${escapeHtml(b.title)}" placeholder="Заголовок" style="min-width:120px;">
      <input type="text" data-index="${idx}" data-act="b-msg" value="${escapeHtml(b.message)}" placeholder="Сообщение" style="min-width:120px;">
      <input type="text" data-index="${idx}" data-act="b-time" value="${escapeHtml(b.time)}" placeholder="сейчас" style="max-width:80px;">
      <button class="mini danger" data-index="${idx}" data-act="b-del">✕</button>
    `;
    c.appendChild(item);
  });
  c.querySelectorAll('[data-act]').forEach(el => {
    const idx = +el.dataset.index;
    const b = screen.banners[idx];
    const act = el.dataset.act;
    if (act === 'b-del'){
      el.addEventListener('click', () => {
        screen.banners.splice(idx, 1);
        renderBannersEditor(); renderScreens(); scheduleSave();
      });
    } else if (act === 'b-en'){
      el.addEventListener('change', e => { b.enabled = e.target.checked; renderScreens(); scheduleSave(); });
    } else {
      el.addEventListener('input', e => {
        if (act === 'b-title') b.title = e.target.value;
        else if (act === 'b-msg') b.message = e.target.value;
        else if (act === 'b-time') b.time = e.target.value;
        renderScreens(); scheduleSave();
      });
    }
  });
}

/* =========================================================
СИНХРОНИЗАЦИЯ ПОЛЕЙ ЭКРАНА
========================================================= */
function syncScreenFields(){
  const s = state.screens[state.currentScreen];
  if (!s) return;
  $('#screenLabel').value = s.label;
  $('#screenMode').value = s.mode;
  $('#navTitle').value = s.navTitle || '';
  $('#activeTab').value = s.activeTab || 'home';
  $('#darkPhoneToggle').checked = s.phoneTheme === 'dark';
  $('#stretchToggle').checked = !!s.stretch;
  $('#profileToggle').checked = !!s.showProfile;
  $('#threadToggle').checked = !!state.showThreadLines;
  $('#profileFields').style.display = s.showProfile ? '' : 'none';
  $('#postsSection').style.display = s.mode === 'feed' ? '' : 'none';
  $('#notificationsSection').style.display = s.mode === 'notifications' ? '' : 'none';
  $('#dialogsSection').style.display = s.mode === 'messages' ? '' : 'none';
  $('#dmSection').style.display = s.mode === 'dm' ? '' : 'none';
  const p = s.profile;
  $('#profileName').value = p.name;
  $('#profileHandle').value = p.handle;
  $('#profileColor').value = p.avatarColor;
  $('#profileVerified').checked = !!p.verified;
  $('#profileBio').value = p.bio || '';
  $('#profileLocation').value = p.location || '';
  $('#profileJoined').value = p.joined || '';
  $('#profileFollowing').value = p.following || '';
  $('#profileFollowers').value = p.followers || '';
  $('#profileBannerColor').value = p.bannerColor;
  const cell = $('#profileAvCell');
  cell.style.background = p.avatarColor;
  cell.innerHTML = avatarInner(p.avatar, p.name) + '<input type="file" accept="image/*" id="profileAvInput">';
  cell.querySelector('input').addEventListener('change', async e => {
    const f = e.target.files[0]; if (!f) return;
    s.profile.avatar = await compressImage(f);
    syncScreenFields(); renderScreens(); scheduleSave();
  });
}

/* =========================================================
ОБЩИЙ РЕНДЕР
========================================================= */
function renderAll(){
  renderTabs();
  syncScreenFields();
  renderCharactersEditor();
  renderBannersEditor();
  renderPostsEditor();
  renderNotifsEditor();
  renderDialogsEditor();
  renderDmEditor();
  renderScreens();
}

/* =========================================================
МОБИЛЬНАЯ РАСКЛАДКА
========================================================= */
document.body.classList.add('mobile-view-editor');
const tabEditor = document.getElementById('mobileTabEditor');
const tabPreview = document.getElementById('mobileTabPreview');
tabEditor.addEventListener('click', () => {
  document.body.classList.remove('mobile-view-preview');
  document.body.classList.add('mobile-view-editor');
  tabEditor.classList.add('active');
  tabPreview.classList.remove('active');
});
tabPreview.addEventListener('click', () => {
  document.body.classList.remove('mobile-view-editor');
  document.body.classList.add('mobile-view-preview');
  tabPreview.classList.add('active');
  tabEditor.classList.remove('active');
});

/* =========================================================
СИНХРОНИЗАЦИЯ ЧЕРЕЗ GITHUB GIST
========================================================= */
const SYNC_KEY = 'twitter-mockup-sync';
const SYNC = {
  token: '',
  gistId: '',
  autoSync: false,
  pushTimer: null,
  load(){
    try {
      const raw = localStorage.getItem(SYNC_KEY);
      if (!raw) return;
      const d = JSON.parse(raw);
      this.token = d.token || '';
      this.gistId = d.gistId || '';
      this.autoSync = !!d.autoSync;
    } catch(e){}
  },
  save(){
    localStorage.setItem(SYNC_KEY, JSON.stringify({
      token: this.token,
      gistId: this.gistId,
      autoSync: this.autoSync
    }));
  },
  setStatus(kind, text){
    const dot = document.getElementById('syncDot');
    const lbl = document.getElementById('syncStatusText');
    dot.classList.remove('ok', 'busy', 'error');
    if (kind === 'ok') dot.classList.add('ok');
    else if (kind === 'busy') dot.classList.add('busy');
    else if (kind === 'error') dot.classList.add('error');
    lbl.textContent = text || '';
  },
  async pull(){
    if (!this.gistId) throw new Error('Gist ID не указан');
    this.setStatus('busy', 'Загружаю из облака…');
    const headers = { 'Accept': 'application/vnd.github+json' };
    if (this.token) headers['Authorization'] = 'token ' + this.token;
    const r = await fetch('https://api.github.com/gists/' + this.gistId, { headers });
    if (!r.ok){
      const err = await r.text();
      throw new Error('GitHub ' + r.status + ': ' + err.slice(0, 180));
    }
    const data = await r.json();
    const file = data.files && data.files['twitter-project.json'];
    if (!file) throw new Error('В гисте нет файла twitter-project.json');
    let content = file.content;
    if (file.truncated && file.raw_url){
      const raw = await fetch(file.raw_url);
      content = await raw.text();
    }
    return JSON.parse(content);
  },
  async push(data){
    if (!this.token) throw new Error('Нужен GitHub токен');
    this.setStatus('busy', 'Отправляю в облако…');
    const content = JSON.stringify(data);
    let url, method, body;
    if (this.gistId){
      url = 'https://api.github.com/gists/' + this.gistId;
      method = 'PATCH';
      body = { files: { 'twitter-project.json': { content } } };
    } else {
      url = 'https://api.github.com/gists';
      method = 'POST';
      body = {
        description: 'Twitter mockup project',
        public: false,
        files: { 'twitter-project.json': { content } }
      };
    }
    const r = await fetch(url, {
      method,
      headers: {
        'Authorization': 'token ' + this.token,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (!r.ok){
      const err = await r.text();
      throw new Error('GitHub ' + r.status + ': ' + err.slice(0, 180));
    }
    const resp = await r.json();
    if (!this.gistId){
      this.gistId = resp.id;
      this.save();
      document.getElementById('ghGistId').value = this.gistId;
    }
    return resp;
  },
  schedulePush(){
    if (this.pushTimer) clearTimeout(this.pushTimer);
    this.pushTimer = setTimeout(() => {
      this.pushTimer = null;
      this.autoPush();
    }, 3000);
  },
  async autoPush(){
    if (!this.token) return;
    try {
      await this.push(collectProject());
      this.setStatus('ok', '☁ Синхронизировано в ' + new Date().toLocaleTimeString('ru-RU').slice(0, 5));
    } catch(e){
      console.error('Auto-push failed:', e);
      this.setStatus('error', 'Ошибка: ' + e.message);
    }
  }
};
function collectProject(){
  return {
    version: 5,
    savedAt: Date.now(),
    screens: state.screens,
    characters: state.characters,
    currentScreen: state.currentScreen,
    showThreadLines: state.showThreadLines
  };
}
function applyProject(data){
  if (!data || !Array.isArray(data.screens) || !data.screens.length){
    throw new Error('Файл повреждён');
  }
  state.screens = data.screens;
  state.characters = Array.isArray(data.characters) ? data.characters : [];
  state.currentScreen = Math.min(data.currentScreen || 0, state.screens.length - 1);
  state.showThreadLines = data.showThreadLines !== false;
  let maxId = 0;
  const scan = (o) => {
    if (!o) return;
    if (Array.isArray(o)) o.forEach(scan);
    else if (typeof o === 'object'){
      if (typeof o.id === 'string'){
        const m = o.id.match(/(\d+)$/);
        if (m) maxId = Math.max(maxId, parseInt(m[1], 10));
      }
      Object.values(o).forEach(scan);
    }
  };
  scan(state.screens); scan(state.characters);
  nextId = maxId + 1;
  migrateAll();
  renderAll();
  saveNow();
}

/* Инициализация панели синхронизации */
SYNC.load();
document.getElementById('ghToken').value = SYNC.token;
document.getElementById('ghGistId').value = SYNC.gistId;
document.getElementById('ghAutosync').checked = SYNC.autoSync;
if (SYNC.gistId && SYNC.token){
  SYNC.setStatus('ok', 'Настроена');
} else if (SYNC.gistId){
  SYNC.setStatus('idle', 'Gist есть, нужен токен');
} else {
  SYNC.setStatus('idle', 'Не настроена');
}
document.getElementById('saveSyncSettings').addEventListener('click', () => {
  SYNC.token = document.getElementById('ghToken').value.trim();
  SYNC.gistId = document.getElementById('ghGistId').value.trim();
  SYNC.autoSync = document.getElementById('ghAutosync').checked;
  SYNC.save();
  SYNC.setStatus('ok', 'Настройки сохранены');
});
document.getElementById('cloudPull').addEventListener('click', async () => {
  if (!confirm('Загрузить проект из облака? Текущие несохранённые изменения будут потеряны.')) return;
  try {
    const data = await SYNC.pull();
    applyProject(data);
    SYNC.setStatus('ok', 'Загружено в ' + new Date().toLocaleTimeString('ru-RU').slice(0, 5));
  } catch(e){
    console.error(e);
    SYNC.setStatus('error', 'Ошибка: ' + e.message);
    alert('Не удалось загрузить:\n' + e.message);
  }
});
document.getElementById('cloudPush').addEventListener('click', async () => {
  try {
    const resp = await SYNC.push(collectProject());
    SYNC.setStatus('ok', 'Отправлено в ' + new Date().toLocaleTimeString('ru-RU').slice(0, 5));
    if (!SYNC.gistId){
      alert('Готово!\nGist ID:\n' + resp.id + '\nСкопируй его в настройки на других устройствах.');
    } else {
      alert('Отправлено!');
    }
  } catch(e){
    console.error(e);
    SYNC.setStatus('error', 'Ошибка: ' + e.message);
    alert('Не удалось отправить:\n' + e.message);
  }
});

/* Автопуш после каждого локального сохранения */
const _origSaveNow = saveNow;
saveNow = function(){
  _origSaveNow();
  if (SYNC.autoSync && SYNC.token && SYNC.gistId){
    SYNC.schedulePush();
  }
};
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && SYNC.pushTimer && SYNC.token){
    clearTimeout(SYNC.pushTimer);
    SYNC.pushTimer = null;
    SYNC.autoPush();
  }
});

/* При открытии сравниваем локальное и облачное */
(async () => {
  if (SYNC.gistId && SYNC.autoSync){
    try {
      const remote = await SYNC.pull();
      const localRaw = localStorage.getItem(STORAGE_KEY);
      const local = localRaw ? JSON.parse(localRaw) : null;
      const remoteTime = remote.savedAt || 0;
      const localTime  = local ? local.savedAt || 0 : 0;
      if (remoteTime > localTime){
        applyProject(remote);
        SYNC.setStatus('ok', 'Подтянул свежее из облака');
      } else {
        SYNC.setStatus('ok', 'Локальная версия новее');
      }
    } catch(e){
      console.warn(e);
      SYNC.setStatus('error', 'Не удалось проверить облако');
    }
  }
})();

/* =========================================================
ГРУППОВОЙ ЧАТ: пикер персонажей + слушатели
========================================================= */
function renderCharsPicker(){
  const picker = $('#dmCharsPicker');
  if (!picker) return;
  const dm = state.screens[state.currentScreen].dm;
  picker.innerHTML = '';
  if (!state.characters.length){
    picker.innerHTML = '<div style="font-size:12px;color:var(--muted);padding:6px;">Библиотека персонажей пуста. Заведи их в разделе «Персонажи».</div>';
    return;
  }
  state.characters.forEach(ch => {
    const already = dm.participants.some(p => p.handle === ch.handle);
    const row = document.createElement('div');
    row.className = 'dm-char-picker-row';
    row.innerHTML = `
      <div class="av-cell" style="width:26px; height:26px; background:${ch.avatarColor}; cursor:default;">
        ${avatarInner(ch.avatar, ch.name)}
      </div>
      <div class="name">${escapeHtml(ch.name)} <span style="color:var(--muted);">@${escapeHtml(ch.handle)}</span></div>
      ${already
        ? '<span class="in-chat">в чате</span>'
        : `<button class="mini" data-ch-id="${ch.id}">+ Добавить</button>`}
    `;
    picker.appendChild(row);
  });
  picker.querySelectorAll('[data-ch-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const ch = state.characters.find(x => x.id === btn.dataset.chId);
      if (!ch) return;
      dm.participants.push({
        id: uid('dp'),
        name: ch.name,
        handle: ch.handle,
        avatar: ch.avatar,
        avatarColor: ch.avatarColor,
        verified: ch.verified,
        status: '',
        lastSeen: ''
      });
      renderDmEditor(); renderScreens(); scheduleSave();
    });
  });
}
function initDmGroupListeners(){
  const gt = $('#dmGroupToggle');
  if (gt) gt.addEventListener('change', e => {
    const dm = state.screens[state.currentScreen].dm;
    dm.isGroup = e.target.checked;
    if (!dm.isGroup && dm.participants.length > 1){
      dm.participants = dm.participants.slice(0, 1);
    }
    renderDmEditor(); renderScreens(); scheduleSave();
  });
  const gn = $('#dmGroupName');
  if (gn) gn.addEventListener('input', e => {
    state.screens[state.currentScreen].dm.groupName = e.target.value;
    renderScreens(); scheduleSave();
  });
  const ap = $('#addDmParticipant');
  if (ap) ap.addEventListener('click', () => {
    const dm = state.screens[state.currentScreen].dm;
    dm.participants.push({
      id: uid('dp'),
      name: 'Новый участник',
      handle: 'nickname',
      avatar: null,
      avatarColor: '#ff9500',
      verified: false,
      status: '',
      lastSeen: ''
    });
    renderDmEditor(); renderScreens(); scheduleSave();
  });
  const acp = $('#addCharsAsParticipants');
  if (acp) acp.addEventListener('click', () => {
    const picker = $('#dmCharsPicker');
    if (!picker) return;
    if (picker.style.display === 'none' || !picker.style.display){
      renderCharsPicker();
      picker.style.display = '';
    } else {
      picker.style.display = 'none';
    }
  });
  const asm = $('#addDmSystemMessage');
  if (asm) asm.addEventListener('click', () => {
    const dm = state.screens[state.currentScreen].dm;
    const first = dm.participants[0] ? dm.participants[0].name : 'Кто-то';
    dm.messages.push(defaultDmMessage({
      text: first + ' создал(а) группу',
      system: true
    }));
    renderDmEditor(); renderScreens(); scheduleSave();
  });
  const ts = $('#dmTypingSender');
  if (ts) ts.addEventListener('change', e => {
    state.screens[state.currentScreen].dm.typingSenderId = e.target.value;
    renderScreens(); scheduleSave();
  });
}

/* =========================================================
ОБРАБОТЧИКИ ПАНЕЛИ
========================================================= */
$('#uiDarkToggle').addEventListener('change', e => {
  document.body.classList.toggle('dark-ui', e.target.checked);
});
$('#screenLabel').addEventListener('input', e => {
  state.screens[state.currentScreen].label = e.target.value;
  renderTabs(); renderScreens(); scheduleSave();
});
$('#screenMode').addEventListener('change', e => {
  state.screens[state.currentScreen].mode = e.target.value;
  renderAll(); scheduleSave();
});
$('#navTitle').addEventListener('input', e => {
  state.screens[state.currentScreen].navTitle = e.target.value;
  renderScreens(); scheduleSave();
});
$('#activeTab').addEventListener('change', e => {
  state.screens[state.currentScreen].activeTab = e.target.value;
  renderScreens(); scheduleSave();
});
$('#darkPhoneToggle').addEventListener('change', e => {
  state.screens[state.currentScreen].phoneTheme = e.target.checked ? 'dark' : 'light';
  renderScreens(); scheduleSave();
});
$('#stretchToggle').addEventListener('change', e => {
  state.screens[state.currentScreen].stretch = e.target.checked;
  renderScreens(); scheduleSave();
});
$('#profileToggle').addEventListener('change', e => {
  state.screens[state.currentScreen].showProfile = e.target.checked;
  $('#profileFields').style.display = e.target.checked ? '' : 'none';
  renderScreens(); scheduleSave();
});
$('#threadToggle').addEventListener('change', e => {
  state.showThreadLines = e.target.checked;
  renderScreens(); scheduleSave();
});

/* Профиль экрана */
function bindProfile(sel, key){
  $(sel).addEventListener('input', e => {
    state.screens[state.currentScreen].profile[key] = e.target.value;
    renderScreens(); scheduleSave();
  });
}
bindProfile('#profileName', 'name');
bindProfile('#profileHandle', 'handle');
bindProfile('#profileColor', 'avatarColor');
bindProfile('#profileBio', 'bio');
bindProfile('#profileLocation', 'location');
bindProfile('#profileJoined', 'joined');
bindProfile('#profileFollowing', 'following');
bindProfile('#profileFollowers', 'followers');
bindProfile('#profileBannerColor', 'bannerColor');
$('#profileVerified').addEventListener('change', e => {
  state.screens[state.currentScreen].profile.verified = e.target.checked;
  renderScreens(); scheduleSave();
});
$('#profileBannerInput').addEventListener('change', async e => {
  const f = e.target.files[0]; if (!f) return;
  state.screens[state.currentScreen].profile.bannerImage = await compressImage(f);
  renderScreens(); scheduleSave();
});
$('#clearBanner').addEventListener('click', () => {
  state.screens[state.currentScreen].profile.bannerImage = null;
  renderScreens(); scheduleSave();
});

/* Одиночный собеседник (поля) */
function bindPeerField(id, key){
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('input', e => {
    const dm = state.screens[state.currentScreen].dm;
    if (dm.participants && dm.participants[0]) dm.participants[0][key] = e.target.value;
    renderScreens(); scheduleSave();
  });
}
bindPeerField('dmPeerName', 'name');
bindPeerField('dmPeerHandle', 'handle');
bindPeerField('dmPeerColor', 'avatarColor');
$('#dmPeerVerified').addEventListener('change', e => {
  const dm = state.screens[state.currentScreen].dm;
  if (dm.participants && dm.participants[0]) dm.participants[0].verified = e.target.checked;
  renderScreens(); scheduleSave();
});
$('#dmTyping').addEventListener('change', e => {
  const dm = state.screens[state.currentScreen].dm;
  dm.typing = e.target.checked;
  if (dm.typing && !dm.typingSenderId && dm.participants && dm.participants[0]){
    dm.typingSenderId = dm.participants[0].id;
  }
  renderDmEditor(); renderScreens(); scheduleSave();
});

/* Персонажи — добавить */
$('#addCharacter').addEventListener('click', () => {
  const ch = defaultCharacter({ name:'Новый персонаж', handle:'nickname' });
  state.characters.push(ch);
  expandedChars.add(ch.id);
  renderCharactersEditor(); renderPostsEditor(); scheduleSave();
});

/* Экраны */
$('#addScreen').addEventListener('click', () => {
  state.screens.push({
    id: uid('s'), label: 'Экран ' + (state.screens.length + 1),
    mode:'feed',
    phoneTheme:'light', stretch:false, navTitle:'Твит',
    activeTab:'home',
    showProfile:false, banners:[],
    profile: defaultProfile(),
    posts: [defaultPost()],
    notifications: [defaultNotif()],
    dialogs: [defaultDialog()],
    dm: {
      isGroup: false,
      groupName: '',
      participants: [
        { id: uid('dp'), name:'Имя', handle:'nickname', avatar:null, avatarColor:'#7856ff', verified:false, status:'', lastSeen:'' }
      ],
      typing: false,
      typingSenderId: null,
      messages: []
    }
  });
  state.currentScreen = state.screens.length - 1;
  renderAll(); scheduleSave();
});

/* Посты / уведомления / диалоги / DM / баннеры */
$('#addPost').addEventListener('click', () => {
  const s = state.screens[state.currentScreen];
  const last = s.posts[s.posts.length - 1];
  const np = defaultPost({
    name: last ? last.name : 'Имя',
    handle: last ? last.handle : 'nickname',
    avatarColor: last ? last.avatarColor : '#1d9bf0',
    avatar: last ? last.avatar : null,
    verified: last ? last.verified : false
  });
  s.posts.push(np); expanded.add(np.id);
  renderPostsEditor(); renderScreens(); scheduleSave();
});
$('#addNotif').addEventListener('click', () => {
  state.screens[state.currentScreen].notifications.push(defaultNotif());
  renderNotifsEditor(); renderScreens(); scheduleSave();
});
$('#addDialog').addEventListener('click', () => {
  state.screens[state.currentScreen].dialogs.push(defaultDialog());
  renderDialogsEditor(); renderScreens(); scheduleSave();
});
$('#addDmMessage').addEventListener('click', () => {
  const dm = state.screens[state.currentScreen].dm;
  const senderId = (dm.participants && dm.participants[0]) ? dm.participants[0].id : null;
  dm.messages.push(defaultDmMessage({ text:'Новое сообщение', senderId }));
  renderDmEditor(); renderScreens(); scheduleSave();
});
$('#addBanner').addEventListener('click', () => {
  state.screens[state.currentScreen].banners.push(defaultBanner());
  renderBannersEditor(); renderScreens(); scheduleSave();
});

/* Проект */
$('#exportProject').addEventListener('click', exportProject);
$('#importProject').addEventListener('click', () => $('#importFileInput').click());
$('#importFileInput').addEventListener('change', async e => {
  const f = e.target.files[0]; if (!f) return;
  await importProjectFromFile(f);
  e.target.value = '';
});
$('#clearProject').addEventListener('click', clearProject);

/* =========================================================
ЭКСПОРТ PNG
========================================================= */
async function capturePhone(index){
  const el = document.querySelector(`.phone[data-screen-index="${index}"]`);
  if (!el) return null;
  const s = state.screens[index];
  return await html2canvas(el, {
    scale: 3,
    backgroundColor: s.phoneTheme === 'dark' ? '#000' : '#fff',
    useCORS: true
  });
}
function downloadCanvas(canvas, filename){
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  link.click();
}
$('#exportCurrent').addEventListener('click', async () => {
  const c = await capturePhone(state.currentScreen);
  if (c) downloadCanvas(c, `tweet-screen-${state.currentScreen + 1}.png`);
});
$('#exportAll').addEventListener('click', async () => {
  for (let i = 0; i < state.screens.length; i++){
    const c = await capturePhone(i);
    if (c) downloadCanvas(c, `tweet-screen-${i + 1}.png`);
    await new Promise(r => setTimeout(r, 250));
  }
});
$('#exportCollage').addEventListener('click', async () => {
  const canvases = [];
  for (let i = 0; i < state.screens.length; i++){
    const c = await capturePhone(i);
    if (c) canvases.push(c);
  }
  if (!canvases.length) return;
  const gap = 60, margin = 60;
  const dark = state.screens.every(s => s.phoneTheme === 'dark');
  const bg = dark ? '#0d0d0d' : '#f2f2f7';
  const cols = Math.min(3, canvases.length);
  const rows = Math.ceil(canvases.length / cols);
  const cellW = Math.max(...canvases.map(c => c.width));
  const cellH = Math.max(...canvases.map(c => c.height));
  const totalW = margin*2 + cols*cellW + (cols-1)*gap;
  const totalH = margin*2 + rows*cellH + (rows-1)*gap;
  const out = document.createElement('canvas');
  out.width = totalW; out.height = totalH;
  const ctx = out.getContext('2d');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, totalW, totalH);
  canvases.forEach((c, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const x = margin + col*(cellW+gap) + (cellW - c.width)/2;
    const y = margin + row*(cellH+gap) + (cellH - c.height)/2;
    ctx.drawImage(c, x, y);
  });
  downloadCanvas(out, 'tweet-collage.png');
});

/* =========================================================
СТАРТ
========================================================= */
function boot(){
  const loaded = loadFromStorage();
  if (!loaded){
    const starter = createStarterState();
    state.screens = starter.screens;
    state.characters = starter.characters;
    state.currentScreen = 0;
    state.showThreadLines = true;
    setTimeout(() => saveNow(), 100);
  }
  migrateAll();
  renderAll();
  setSaveStatus('ok', loaded ? 'Загружено' : 'Новый проект');
}
initDmGroupListeners();
boot();
window.addEventListener('beforeunload', () => {
  if (saveTimer){ clearTimeout(saveTimer); saveNow(); }
});