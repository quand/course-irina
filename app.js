(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const yandex = document.body.dataset.provider === 'yandex';
  const provider = yandex ? 'на Яндекс Диск' : 'в Google Drive';
  const lessons = COURSE.lessons;
  const validIds = new Set(lessons.map(l => l.lesson));
  const rows = new Map();
  const weekNames = ['Старт интенсива', 'Неделя 1', 'Неделя 2', 'Неделя 3', 'Неделя 4'];
  const notify = message => { $('#notice').textContent = message; $('#notice').hidden = false; };
  function read(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { notify('Не удалось прочитать сохранённый прогресс. Можно загрузить резервный файл.'); return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch { notify('Браузер не сохраняет изменения. Сохраните прогресс в файл перед закрытием курса.'); return false; }
  }
  const saved = read('lp_done', []);
  if (!Array.isArray(saved)) notify('Сохранённые отметки повреждены. Можно загрузить резервный файл.');
  const done = new Set((Array.isArray(saved) ? saved : []).filter(id => validIds.has(id)));
  let last = read('lp_last', null);
  if (!validIds.has(last)) last = null;
  let current = null;
  const locationLabel = l => `${weekNames[l.week] || `Неделя ${l.week}`}${l.day ? ` · День ${l.day}` : ''} · Урок ${l.lesson}`;
  function element(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }
  $('#ct').textContent = COURSE.course.title;
  $('#cl').textContent = COURSE.course.lead;
  const weeks = new Map();
  for (const l of lessons) {
    if (!weeks.has(l.week)) weeks.set(l.week, []);
    weeks.get(l.week).push(l);
  }
  for (const [week, items] of weeks) {
    const section = element('section', 'week');
    section.id = `week-${week}`;
    section.append(element('h2', '', weekNames[week] || `Неделя ${week}`));
    section.append(element('p', 'wmeta', `Занятий: ${items.length}`));
    const link = element('a', 'button', week === 0 ? 'Старт' : `Неделя ${week}`);
    link.href = `#week-${week}`;
    link.onclick = () => { $('#q').value = ''; filter(); };
    $('#weeks').append(link);
    let day = null, group;
    for (const l of items) {
      if (!group || l.day !== day) {
        day = l.day;
        group = element('div', 'day');
        if (day) group.append(element('h3', '', `День ${day}`));
        section.append(group);
      }
      const row = element('div', 'lesson');
      row.dataset.lesson = l.lesson;
      row.dataset.title = l.title.toLocaleLowerCase('ru');
      row.append(element('div', 'num', l.lesson));
      const text = element('div', 't');
      text.append(element('b', '', l.title));
      text.append(element('span', '', `Занятие ${l.lesson}`));
      row.append(text);
      const check = element('button', 'check');
      check.setAttribute('aria-label', `Пройдено: ${locationLabel(l)}, ${l.title}`);
      check.onclick = () => toggleDone(l.lesson);
      const play = element('button', 'play', 'Смотреть');
      play.setAttribute('aria-label', `Смотреть: ${l.title}, ${locationLabel(l)}`);
      play.onclick = () => openPlayer(l);
      row.append(check, play);
      group.append(row);
      rows.set(l.lesson, row);
    }
    $('#root').append(section);
  }
  function resumeLesson() {
    const previous = lessons.find(l => l.lesson === last);
    if (previous && !done.has(previous.lesson)) return previous;
    return lessons.find(l => !done.has(l.lesson));
  }
  function update() {
    for (const [id, row] of rows) {
      row.classList.toggle('done', done.has(id));
      const check = row.querySelector('.check');
      check.classList.toggle('on', done.has(id));
      check.setAttribute('aria-pressed', String(done.has(id)));
    }
    $('#done').textContent = done.size;
    $('#total').textContent = lessons.length;
    $('#progress').max = lessons.length;
    $('#progress').value = done.size;
    $('#progress-text').textContent = `Пройдено ${done.size} из ${lessons.length} занятий`;
    const next = resumeLesson();
    $('#resume').disabled = !next;
    $('#resume').textContent = !next ? 'Курс пройден ✓' : (last !== null || done.size ? 'Продолжить курс' : 'Начать курс');
    $('#resume-text').textContent = next ? `${locationLabel(next)} · ${next.title}` : 'Все занятия отмечены. Любой урок можно посмотреть ещё раз ниже.';
    if (current) {
      $('#pdone').textContent = done.has(current.lesson) ? '✓ Пройдено — отменить' : 'Отметить пройденным';
      $('#pdone').setAttribute('aria-pressed', String(done.has(current.lesson)));
    }
  }
  function toggleDone(id) {
    if (done.has(id)) done.delete(id); else done.add(id);
    write('lp_done', [...done]);
    update();
  }
  function filter() {
    const query = $('#q').value.trim().toLocaleLowerCase('ru');
    for (const row of rows.values()) row.hidden = !row.dataset.title.includes(query);
    document.querySelectorAll('.day').forEach(day => { day.hidden = ![...day.querySelectorAll('.lesson')].some(row => !row.hidden); });
    document.querySelectorAll('.week').forEach(week => { week.hidden = ![...week.querySelectorAll('.day')].some(day => !day.hidden); });
    $('#empty').hidden = [...rows.values()].some(row => !row.hidden);
  }
  function yandexLink(value) {
    try {
      const url = new URL(value);
      const hosts = ['disk.yandex.ru', 'disk.yandex.com', 'disk.yandex.com.tr', 'yadi.sk'];
      return url.protocol === 'https:' && hosts.includes(url.hostname) && !url.username && !url.password && !url.port && /^\/(d|i)\/[^/]+/.test(url.pathname) ? url.href : null;
    } catch { return null; }
  }
  function openPlayer(lesson) {
    current = lesson;
    last = lesson.lesson;
    write('lp_last', last);
    const video = COURSE.videos[lesson.embed];
    const driveId = typeof video.driveId === 'string' && /^[A-Za-z0-9_-]+$/.test(video.driveId) ? video.driveId : null;
    const url = yandex ? yandexLink(video.yandexUrl) : driveId ? `https://drive.google.com/file/d/${driveId}/view` : null;
    const embed = !yandex && !!url;
    $('#pt').textContent = lesson.title;
    $('#place').textContent = locationLabel(lesson);
    $('#pf').src = embed ? `https://drive.google.com/file/d/${driveId}/preview` : 'about:blank';
    $('#frame-wrap').hidden = !embed;
    $('#ph').hidden = !yandex && !!url;
    $('#external').hidden = !url;
    $('#external').removeAttribute('href');
    if (url) $('#external').href = url;
    $('#google-alternatives').hidden = yandex || !driveId;
    $('#download-video').hidden = yandex || !driveId;
    $('#download-video').removeAttribute('href');
    $('#drive-folder').hidden = true;
    $('#drive-folder').removeAttribute('href');
    if (!yandex && driveId) {
      $('#download-video').href = `https://drive.usercontent.google.com/download?id=${driveId}&export=download`;
      try {
        const folder = new URL(COURSE.course.driveFolderUrl);
        if (folder.origin === 'https://drive.google.com' && !folder.username && !folder.password && /^\/drive\/folders\/[A-Za-z0-9_-]+$/.test(folder.pathname)) {
          $('#drive-folder').href = folder.href;
          $('#drive-folder').hidden = false;
        }
      } catch { /* A folder link is optional. */ }
    }
    $('#ph').textContent = !url ? `Видео пока не подключено. Ссылка на занятие появится после добавления видео ${provider}.` : 'Откройте видео на Яндекс Диске кнопкой ниже. После просмотра вернитесь в курс и отметьте занятие пройденным.';
    $('#player-help').textContent = yandex ? 'Видео откроется отдельно. Курс сохранит выбранное занятие; отметка о прохождении ставится вручную.' : 'Если видео не запускается, откройте папку курса и выберите файл или скачайте его для просмотра на устройстве. Имя файла: ' + lesson.embed + '.mp4. Отметка о прохождении ставится вручную.';
    clearTimeout(loadTimer);
    setBusy(embed);
    if (embed) loadTimer = setTimeout(() => setBusy(false), 20000);
    update();
    if (!$('#player').open) $('#player').showModal();
  }
  $('#resume').onclick = () => { const lesson = resumeLesson(); if (lesson) openPlayer(lesson); };
  $('#q').oninput = filter;
  $('#pdone').onclick = () => { if (current) toggleDone(current.lesson); };
  $('#prev').onclick = () => { const prev = lessons[lessons.indexOf(current) - 1]; if (prev) openPlayer(prev); };
  $('#next').onclick = () => { const next = lessons[lessons.indexOf(current) + 1]; if (next) openPlayer(next); };
  const frame = $('#pf');
  let loadTimer = 0;
  function setBusy(busy) {
    $('#player-loading').hidden = !busy;
    const idx = current ? lessons.indexOf(current) : -1;
    $('#prev').disabled = busy || idx <= 0;
    $('#next').disabled = busy || idx < 0 || idx >= lessons.length - 1;
  }
  frame.addEventListener('load', () => { clearTimeout(loadTimer); setBusy(false); });
  $('#pclose').onclick = () => { $('#pf').src = 'about:blank'; $('#player').close(); };
  $('#player').addEventListener('close', () => { $('#pf').src = 'about:blank'; current = null; });
  $('#export').onclick = () => {
    const data = {format: 'irina-course-progress', version: 1, done: [...done], last, exportedAt: new Date().toISOString()};
    const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'}));
    const a = element('a');
    a.href = url;
    a.download = `course-progress-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  };
  $('#import').onclick = () => $('#import-file').click();
  $('#import-file').onchange = async event => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      if (file.size > 100000) throw new Error('file too large');
      const data = JSON.parse(await file.text());
      if (!data || data.format !== 'irina-course-progress' || data.version !== 1 || !Array.isArray(data.done) || !data.done.every(id => validIds.has(id)) || !(data.last === null || validIds.has(data.last))) throw new Error('invalid progress');
      data.done.forEach(id => done.add(id));
      last = data.last;
      const savedDone = write('lp_done', [...done]);
      const savedLast = write('lp_last', last);
      update();
      if (savedDone && savedLast) notify('Прогресс загружен. Отметки объединены с текущими.');
    } catch { notify('Не удалось загрузить файл. Выберите JSON-файл, сохранённый кнопкой «Сохранить прогресс в файл» в этом курсе.'); }
    event.target.value = '';
  };
  $('#reset').onclick = () => {
    if (!done.size) { notify('Отметок пока нет — курс и так в начале.'); return; }
    if (!confirm('Снять отметки со всех занятий? Курс вернётся к началу.')) return;
    done.clear();
    last = null;
    write('lp_done', []);
    write('lp_last', null);
    update();
    notify('Все отметки сняты. Курс начнётся заново.');
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  const toTop = $('#to-top');
  toTop.onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
  window.addEventListener('scroll', () => { toTop.hidden = window.scrollY < 500; }, {passive: true});
  function networkStatus() { $('#offline').hidden = navigator.onLine; }
  window.addEventListener('online', networkStatus);
  window.addEventListener('offline', networkStatus);
  window.addEventListener('storage', event => {
    if (event.key === 'lp_done' || event.key === 'lp_last' || event.key === null) {
      const incoming = read('lp_done', []);
      if (Array.isArray(incoming)) { done.clear(); incoming.filter(id => validIds.has(id)).forEach(id => done.add(id)); }
      const incomingLast = read('lp_last', null);
      last = validIds.has(incomingLast) ? incomingLast : null;
      update();
    }
  });
  networkStatus();
  update();
})();
